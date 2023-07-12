import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-buttom/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItem } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import {withRouter} from 'react-router-dom';
import { toggleHidden } from "../../redux/cart/cart-action";

const CartDropdown = ({cartItems,history,dispatch}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length?
            cartItems.map(cartItem=>(
                <CartItem key={cartItem.id} item={cartItem}/>
                ))
            :<span className="empty-message">Your cart is empty</span>
        }
        </div>
        <CustomButton onClick = {()=>
             {history.push('/checkout'); 
             dispatch(toggleHidden());}}>CHECKOUT</CustomButton>

    </div>

);

const mapStateToProps=createStructuredSelector ({
    cartItems:selectCartItem
});



export default withRouter(connect(mapStateToProps)(CartDropdown));  