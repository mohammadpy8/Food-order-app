import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import products from "../assets/fake-data/products";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from 'reactstrap';
import ProductCard from "../components/UI/product-card/ProductCard";

import "../styles/product-card.css";
import "../styles/products-details.css";

import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';

const FoodDetails = () => {

    const [tab, setTab] = useState("desc");
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");

    const { id } = useParams();
    const product = products.find(product => product.id === id);

    const [previewImg, setPreviewImg] = useState(product.image01);
    const { title, price, category, desc, image01 } = product;

    const relatedProduct = products.filter(item => category === item.category);
    const dispatch = useDispatch();

    useEffect(() => {

        setPreviewImg(product.image01);

    }, [product]);

    useEffect(() => {

        window.scrollTo(0, 0);

    }, [product]);

    const addItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01,
        }));
    };

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <Helmet title="Product-details">
            <CommonSection title={title} />
            
            <section>
                <Container>
                    <Row>
                        <Col lg="2" md="2">
                            <div className='products__images'>
                                <div className='img__item mb-3'
                                    onClick={() => setPreviewImg(product.image01)}>
                                    <img src={product.image01} alt="" className='w-50' />
                                </div>
                                <div className='img__item mb-3'
                                    onClick={() => setPreviewImg(product.image02)}>
                                    <img src={product.image02} alt="" className='w-50' />
                                </div>
                                <div className='img__item mb-3'
                                    onClick={() => setPreviewImg(product.image03)}>
                                    <img src={product.image03} alt="" className='w-50' />
                                </div>
                            </div>
                        </Col>

                        <Col lg="4" md="4">
                            <div className='product__main-img'>
                                <img src={previewImg} alt="" className='w-100' />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <div className='single__product-content'>
                                <h2 className='product__title mb-3'>{title}</h2>
                                <p className='product__price'>Price : <span>${price}</span></p>
                                <p className='category mb-5'>Category : <span>{category}</span></p>
                                <button onClick={addItem}
                                    className='AddTOCart__btn'>Add to Cart</button>
                            </div>
                        </Col>

                        <Col lg="12">
                            <div className='tabs d-flex align-items-center gap-5 py-3'>
                                <h6 className={`${tab === "desc" ? 'tab__active' : ''}`}
                                    onClick={() => setTab("desc")}>Description</h6>
                                <h6 className={`${tab === "rev" ? 'tab__active' : ''}`}
                                    onClick={() => setTab("rev")}>Review</h6>
                            </div>

                            {
                                tab === "desc" ?
                                    <div className='tab__content'>
                                        <p className=''>{desc}</p>
    
                                    </div> :
                                    <div className='tab__form mb-3'>

                                        <div className='review pt-5'>
                                            <p className='user__name mb-0'>
                                                Mohammad
                                            </p>
                                            <p className='user__email'>example@gmail.com</p>
                                            <p className='feedback__text'>Greate Product</p>
                                        </div>
                                        <div className='review'>
                                            <p className='user__name mb-0'>
                                                Mohammad
                                            </p>
                                            <p className='user__email'>example@gmail.com</p>
                                            <p className='feedback__text'>Greate Product</p>
                                        </div>
                                        <div className='review'>
                                            <p className='user__name mb-0'>
                                                Mohammad
                                            </p>
                                            <p className='user__email'>example@gmail.com</p>
                                            <p className='feedback__text'>Greate Product</p>
                                        </div>
                                
                                        <form className='form' onSubmit={submitHandler}>
                                            <div className='form__group'>
                                                <input type='text'
                                                    placeholder='enter your name'
                                                    onChange={e => setEnteredName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className='form__group'>
                                                <input type='text'
                                                    placeholder='enter your email'
                                                    onChange={e => setEnteredEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className='form__group'>
                                                <textarea rows={5} type='text'
                                                    placeholder='enter your idea'
                                                    onChange={e => setReviewMsg(e.target.value)}
                                                    required
                                                />
                                            </div>
                                
                                            <button type='submit' className='AddTOCart__btn'>Submit</button>
                                        </form>
                                    </div>
                            }

                        </Col>

                        <Col lg="12" className='mb-5 mt-5'>
                            <h2 className='related__product-title'>You Might also Like</h2>
                        </Col>

                        {
                            relatedProduct.map(item => (
                                <Col lg="3" md="4" sm="6" xs="6"
                                    key={item.id} className='mb-4'>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>

        </Helmet>
    );
};

export default FoodDetails;