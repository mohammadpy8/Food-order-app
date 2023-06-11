import React, {useEffect} from 'react';

import { Link } from 'react-router-dom';
import "../../../styles/product-card.css";

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';
import { useNavigate } from 'react-router-dom';

const ProductCard = (props) => {

    const { id, title, image01, price } = props.item;
    const dispatch = useDispatch();

    const addToCart = () => {

        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price,
        }));
    };

    // const navigate = useNavigate();
    useEffect(() => {

        window.scrollTo(0, 0);

    }, [title])

    return (
        
        <div className='product__item'>
          
            <div className='product__img'>
                <img src={image01} alt="product" className='w-50'/>
            </div>
            <div className='product__content' >
                <h5><Link to={`/foods/${id}`}>{title}</Link></h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product__price'>${price}</span>
                    <button className='AddTOCart__btn' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
      
        </div>
    );
}

export default ProductCard
