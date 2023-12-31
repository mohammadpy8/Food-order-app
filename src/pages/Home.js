import React from 'react';
import { useState, useEffect } from 'react';
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';
import heroImg from "../assets/images/hero.png"; 
import "../styles/hero-section.css";
import { Link } from 'react-router-dom';

import Category from '../components/UI/category/Category';
import "../styles/home.css";

import feaimg01 from "../assets/images/service-01.png";
import feaimg02 from "../assets/images/service-02.png";
import feaimg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";

import ProductCard from '../components/UI/product-card/ProductCard';
import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";
import TestimonialSlider from '../components/UI/slider/TestimonialSlider';

const featureData = [
    {
        title: "Quick Delivery",
        imgUrl: feaimg01,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
        Minus: "foods"
    },
    {
        title: "Super Dine In",
        imgUrl: feaimg02,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
        Minus: "foods"
    },
    {
        title: "Easy Pick Up",
        imgUrl: feaimg03,
        desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy",
        Minus: "foods"
    },
]

const Home = () => {

    const [category, setCategory] = useState("ALL");
    const [allProducts, setAllProducts] = useState(products);
    const [hotPizza, setHotPizza] = useState([]);

    useEffect(() => {
        
        const filteredPizza = products.filter(item => item.category === "Pizza"); 
        const slicePizza = filteredPizza.slice(0, 4);
        setHotPizza(slicePizza);

    }, [])

    useEffect(() => {

        if (category === "ALL") {
            setAllProducts(products);
        };
        if (category === "BURGER") {
            const filteredProducts = products.filter(item => item.category === "Burger");
            setAllProducts(filteredProducts);
        };
        if (category === "PIZZA") {
            const filteredProducts = products.filter(item => item.category === "Pizza");
            setAllProducts(filteredProducts);
        };
        if (category === "BREAD") {
            const filteredProducts = products.filter(item => item.category === "Bread");
            setAllProducts(filteredProducts);
        };

    }, [category]);

    return (
        <Helmet title="Home">

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className='hero__content'>
                                <h5 className='mb-3'>easy way to make an order</h5>
                                <h1 className='mb-4 hero__title'><span>Hungry?</span> Just Wait <br /> Food at<span> your door</span></h1>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat</p>
                                <div className='hero__btns d-flex align-items-center gap-5 mt-4'>
                                    <button className='order__btn d-flex align-items-center justify-content-between'>Order now <i className='ri-arrow-right-s-line'></i></button>
                                    <button className='all__foods-btn'><Link to="/foods">See All Foods</Link></button>
                                </div>
                                <div className='d-flex align-items-center gap-5 mt-5 hero__services'>
                                    <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className='ri-car-line'></i></span> No shipping charge </p>
                                    <p className='d-flex align-items-center gap-2'><span className='shipping__icon'><i className='ri-shield-check-line'></i></span> 100% secure Checkout </p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className='hero__img'>
                                <img src={heroImg} alt="heroimg" className='w-100' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Category />
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h5 className='feature__subtitle mb-4'>What we Serve</h5>
                            <h2 className='feature__title'>Just site back at home</h2>
                            <h2 className='feature__title'>we will <span>Take Care</span></h2>
                            <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                            <p className='feature__text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                        </Col>

                        {
                            featureData.map((item, index) => (
                                <Col lg="4" md="6" sm="6" key={index} className='mt-5'>
                                    <div className='feature__item text-center px-5 py-3'>
                                        <img src={item.imgUrl} alt="imgfood" className='w-25 mb-3' />
                                        <h5 className='fw-bold mb-3'>{item.title}</h5>
                                        <p>{item.desc}</p>
                                    </div>
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2>Popular Foods</h2>
                        </Col>

                        <Col lg="12">
                            <div className='food__category d-flex align-items-center justify-content-center gap-4'>
                                <button className={`all__btn ${category === "ALL" ? "foodBtnActive" : ""}`} onClick={() => setCategory("ALL")}>All</button>
                                <button className={`d-flex align-items-center gap-2 ${category === "BURGER" ? "foodBtnActive" : ""}`} onClick={() => setCategory("BURGER")}><img src={foodCategoryImg01} alt="burger" />Burger</button>
                                <button className={`d-flex align-items-center gap-2 ${category === "PIZZA" ? "foodBtnActive" : ""}`} onClick={() => setCategory("PIZZA")}><img src={foodCategoryImg02} alt="pizza" />Pizza</button>
                                <button className={`d-flex align-items-center gap-2 ${category === "BREAD" ? "foodBtnActive" : ""}`} onClick={() => setCategory("BREAD")}><img src={foodCategoryImg03} alt="Bread" />Bread</button>
                            </div>
                        </Col>

                        {
                            allProducts.map(item => (
                                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className='mt-5'>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }

                    </Row>
                </Container>
            </section>

            <section className='why__choose-use'>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <img src={whyImg} alt='why-img' className='w-100'/>
                        </Col>

                        <Col lg="6" md="6">
                            <div className='why__tasty-treat'>
                                <h2 className='tasty__title mb-4'>Why <span>Tasty Treat?</span></h2>
                                <p className='tasty__desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>

                                <ListGroup className='mt-4'>
                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='d-flex align-items-center gap-2 choose__use-title'><i class="ri-checkbox-circle-line"></i>
                                            Fresh And Tasty Foods</p>
                                            <p className='choose__use-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                                    </ListGroupItem>

                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='d-flex align-items-center gap-2 choose__use-title'><i class="ri-checkbox-circle-line"></i>
                                            Quality Support Foods</p>
                                            <p className='choose__use-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>

                                    </ListGroupItem>

                                    <ListGroupItem className='border-0 ps-0'>
                                        <p className='d-flex align-items-center gap-2 choose__use-title'><i class="ri-checkbox-circle-line"></i>
                                            Order from any Location</p>
                                            <p className='choose__use-desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>

                                    </ListGroupItem>
                                </ListGroup>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='pt-0'>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center mb-5'>
                            <h2>Hot Pizza</h2>
                        </Col>

                        {
                            hotPizza.map(item => (
                                <Col lg="3" md="4" sm="6" xs="6" key={item.id} className='mt-5'>
                                    <ProductCard item={item} />
                                </Col>
                            ))
                        }
                        
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>

                        <Col lg="6" md="6">
                            <div className='testimonial '>
                                <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                                <h2 className='testimonial__title mb-4'>What our <span>customers </span>are saying</h2>
                                <p className='testimonial__desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et</p>

                                <TestimonialSlider />
                            </div>
                        </Col>

                        <Col lg="6" md="6">
                            <img src={networkImg} alt="network-img" className='w-100'/>
                        </Col>
                    </Row>
                </Container>
            </section>

        </Helmet>
    );
};

export default Home;