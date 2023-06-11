import React, {useRef, useEffect} from 'react';

import { Container } from "reactstrap";
import headIcon from "../../assets/images/headicon.png"
import { NavLink, Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

import "../../styles/header.css";

const nav__links = [
    {
        display: "Home",
        path: "/home"
    },
    {
        display: "Foods",
        path: "/foods"
    },
    {
        display: "Cart",
        path: "/cart"
    },
    {
        display: "Contact",
        path: "/contact"
    },
];

const Header = () => {

    const menuRef = useRef(null);

    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    // const headerRef = useRef(null);

    const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
    
    const dispatch = useDispatch();

    const toggleCart = () => {

        dispatch(cartUiActions.toggle());
    };

    // useEffect(() => {

    //     window.addEventListener("scroll", () => {
    //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //             headerRef.current.classList.add("header__shrink");
    //         } else {
    //             headerRef.current.classList.remove("header__shrink");
    //         }
    //     })

    //     return () => window.removeEventListener("scroll", () => {
    //         if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //             headerRef.current.classList.add("header__shrink");
    //         } else {
    //             headerRef.current.classList.remove("header__shrink");
    //         }
    //     } );

    // }, [headerRef])

    return (
        <header className='header' >

            <Container>

                <div className='nav__wrapper d-flex align-items-center justify-content-between'>
                    <div className='head__title'>
                        <img src={headIcon} alt="icon" />
                        <h5><Link to="/"><span className='food'>Food </span><span>App</span></Link></h5>
                    </div>
                    <div className='navigation' ref={menuRef} onClick={toggleMenu}>
                        <div className='menu d-flex aling-items-center gap-5'>
                            {
                                nav__links.map((item, index) => (
                                    <NavLink
                                        to={item.path} key={index}
                                        className={navClass => navClass.isActive ? "active__menu" : ""}>
                                        {
                                            item.display
                                        }
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>

                    <div className='nav__right d-flex align-items-center gap-4'>
                        <span className='cart__icon' onClick={toggleCart}>
                            <i className='ri-shopping-basket-line'></i>
                            <span className='cart__badge'>{totalQuantity}</span>
                        </span>
                        <span className='user'>
                            <Link to="/login">
                                <i class="ri-user-line"></i>
                            </Link>
                        </span>
                        <span className='mobile__menu' onClick={toggleMenu}>
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>

                </div>
            </Container>

        </header>
    );
};

export default Header;