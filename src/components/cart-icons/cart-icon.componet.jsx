import React from "react";

import {ReactComponent as ShoppingBag} from '../../assets/Shopping-bag.svg';
import './cart-icon.styles.scss';
import { connect } from "react-redux";
import { toggleHidden } from "../../redux/cart/cart-action";
import { selectCartItemCount } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

const CartIcon =({toggleHidden,itemCount})=>(
    <div className="cart-icon" onClick= {toggleHidden}>
        <ShoppingBag className="shopping-bag"/>
        <span className="item-count">{(itemCount)}</span>
    </div>
)

const mapDispatchToProps=dispatch=>({
    toggleHidden:()=> dispatch(toggleHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemCount

});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);

