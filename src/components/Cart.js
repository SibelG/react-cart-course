

import React, { Fragment, useState, useEffect } from 'react';

import CartItem from './CartItem';

const Cart = ({courses, changeQuantity}) => {

    const [classActive, toggleClass] = useState(false);
    const [sum, setSum] = useState(0);

    const toggleButton = () => {
        toggleClass(!classActive);
    }

    useEffect(() => {
        let total = 0;
        for(var i = 0; i < courses.length ; i++) {
            total+= courses[i].price*courses[i].quantity;
        }
        setSum(total);
    }, [courses])

    const checkout = () => {
        alert(`Checkout - Subtotal: $ ${sum.toFixed(2)}`)
    }

    return (
        <Fragment>
            <div id="sidebar" className={classActive ? "active" : ""}>
                <div className="sidebar-content">
                    <div className="toggle-btn" onClick={toggleButton}>
                        <span className="span-1"></span>
                        <span className="span-2"></span>
                        <span className="span-3"></span>
                    </div>
                    
                    <div className="cart-content">
                    <h3>
                        <img src="https://checkout.advancedshippingmanager.com/wp-content/uploads/2015/10/Cart-Icon-PNG-Graphic-Cave-e1461785088730-300x300.png" alt="cart" />
                        Cart
                    </h3> 

                    <div className="cart-list">
                        {
                            courses.length === 0 
                            ? 
                            <div className="empty-cart">
                                <p>There are no items in Cart, Please add items to checkout!!!</p>
                            </div> 
                            :
                            courses.map(course => {
                                return (
                                    <CartItem 
                                        key={course.id} 
                                        course={course} 
                                        changeQuantity={changeQuantity} 
                                         />
                                )
                            })
                        }
                    </div>

                    <div className="checkout-div">
                        <div className="checkout">
                                <div className="subtotal-div">
                                    <p className="subtotal">SUBTOTAL</p>
                                    <p className="subtotal-price">$ {sum.toFixed(2)}</p>
                                </div>
                                <button className="checkout-btn" onClick={checkout}>CHECKOUT</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Cart;