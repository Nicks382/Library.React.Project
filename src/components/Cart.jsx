import React from "react";

const Cart = () => {
    return (
        <div className="cart__header">
            <div className="cart__title">
                <h2>Cart</h2>
            </div>
            <div className="cart__total">
                <h3>Total: $0.00</h3>
            </div>
            <div className="cart__checkout">
                <button>Checkout</button>
            </div>
            
        </div>
    )
};

export default Cart;