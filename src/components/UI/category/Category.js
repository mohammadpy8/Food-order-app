import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import categoryimg01 from "../../../assets/images/category-01.png";
import categoryimg02 from "../../../assets/images/category-02.png";
import categoryimg03 from "../../../assets/images/category-03.png";
import categoryimg04 from "../../../assets/images/category-04.png";

import "../../../styles/category.css";

const categoryData = [

    {
        display: "Fastfood",
        imgUrl: categoryimg01,
    },
    {
        display: "Pizza",
        imgUrl: categoryimg02,
    },
    {
        display: "Asian Food",
        imgUrl: categoryimg03,
    },
    {
        display: "Row Meat",
        imgUrl: categoryimg04,
    },
];

const Category = () => {
    return (
        <Container>
            <Row>
                {
                    categoryData.map((item, index) => (
                        <Col lg='3' md='4' sm="6" xs="6" key={index} className='mb-4'>
                            <div className='category__item d-flex align-items-center gap-3'>
                                <div className='category__img'>
                                    <img src={item.imgUrl} alt="imgUrl" />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
                <Col lg='3' md='4'></Col>
            </Row>
        </Container>
    );
};

export default Category;