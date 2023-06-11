import React, {useState} from 'react';
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";

const Checkout = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const shippingInfo = [];

    const cartTotalAmout = useSelector(state => state.cart.totalAmount);
    const shippingCost = 30;

    const totalAmount = cartTotalAmout + Number(shippingCost);

    const submitHandler = e => {
        e.preventDefault();

        const userShippingAddress = {
            name,
            email,
            number,
            country,
            city,
            postalCode,
        };
        shippingInfo.push(userShippingAddress);

    }

    return (
        <Helmet title="Checkout">
            <CommonSection title="Checkout" />
            
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="6">
                            <h6 className='mb-4'>Shipping Address</h6>
                            <form className='checkout__form' onSubmit={submitHandler}>

                                <div className='form__group'>
                                    <input type='text'
                                        placeholder='enter your name'
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='form__group'>
                                    <input type='email'
                                        placeholder='enter your email'
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='form__group'>
                                    <input type='number'
                                        placeholder='Phone number'
                                        onChange={e => setNumber(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='form__group'>
                                    <input type='text'
                                        placeholder='Country'
                                        onChange={e => setCountry(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='form__group'>
                                    <input type='text'
                                        placeholder='City'
                                        onChange={e => setCity(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='form__group'>
                                    <input type='number'
                                        placeholder='postal code'
                                        onChange={e => setPostalCode(e.target.value)}
                                        required
                                    />
                                </div>

                                <button className='AddTOCart__btn mb-3'>Payment</button>
                            </form>

                        </Col>

                        <Col lg="4" md="6">
                            <div className='checkout__bill'>
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>SubTotal: <span>${cartTotalAmout}</span></h6>
                                <h6 className='d-flex align-items-center justify-content-between mb-3'>Shipping: <span>${shippingCost}</span></h6>

                                <div className='checkout__total'>
                                    <h5 className='d-flex align-items-center justify-content-between'>Total: <span>${totalAmount}</span></h5>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Checkout;