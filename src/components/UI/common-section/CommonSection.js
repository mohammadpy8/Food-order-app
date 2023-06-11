import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import "../../../styles/common-section.css";

const CommonSection = (props) => {

    return (
        <section className='common__section'>
            <Container>
                <h2 className='text-white fw-bold'>{props.title}</h2>
            </Container>
        </section>
    );
};

export default CommonSection;