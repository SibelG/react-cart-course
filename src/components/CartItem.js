import React from 'react'

const CartItem = ({course, changeQuantity}) => {
    return (
        <div className="cart-item">
            <img src={course.url} alt="cart-item" className="cart-item-image" />
            <div>
                <div>
                    <p className="item-title">{course.title}</p>
                    <span className="cart-item-price">$ {course.price}</span>
                </div>
                <div>
                    <p className="item-quantity">Quantity: <span>{course.quantity}</span></p>
                    <div>
                     <button className="quantity-btn" onClick={() => changeQuantity(course, '-')}>-</button>
                     <button className="quantity-btn" onClick={() => changeQuantity(course, '+')}>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
