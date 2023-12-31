import React from "react";
import './checkout-styles.scss';
import { connect } from "react-redux";
import { selectCartItem, selectCartTotal } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckoutPage = ({cartItems,total}) =>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span >Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckOutItem key={cartItem.id} cartItem={cartItem}/>
                )
        }

        <div className="total">
            <span>Total: ₹{total}</span>
        </div>
        <div className="test-credit">
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242 - EXP:01/24 - CVV:123
        </div>

        <StripeCheckoutButton price={total} />


    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItem ,
    total:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);