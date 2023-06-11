import React from 'react';
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import { useSelector } from "react-redux";
import { Container, Row, Col } from 'reactstrap';
import "../styles/cart-page.css";

import { cartActions, cartActios } from "../store/shopping-cart/cartSlice";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {
                cartItems.length === 0 ?
                  <h5 className='text-center'>Your Cart is empty!!</h5> :
                  <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <th>image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map(item => <Tr item={item} key={item.id} />)
                      }
                      
                    </tbody>
                  </table>
              }

              <div className='mt-4'>
                <h6>SubTotal: <span className='cart__subtotal'>${totalAmount}</span></h6>
                <p>Taxes and shipping will calculate at checkout</p>
                <div className='cart__page-btn'>
                  <button className='AddTOCart__btn me-4'><Link to="/foods">Continue to Shopping</Link></button>
                  <button className='AddTOCart__btn'><Link to="/checkout">Proceed to Checkout</Link></button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  );
};

const Tr = (props) => {

  const { title, image01, price, quantity, id } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  }

  return <tr>
    <td className='text-center cart__img-box'><img src={image01} alt="product" /></td>
    <td className='text-center'>{title}</td>
    <td className='text-center'>${price}</td>
    <td className='text-center'>{quantity}x</td>
    <td className='text-center cart__item-del'><i class="ri-delete-bin-5-line" onClick={deleteItem}></i></td>
  </tr>
}

export default Cart;