import React from "react";
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import { connect } from "react-redux";
import CartIcon from "../cart-icons/cart-icon.componet";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { selectCartHidden } from "../../redux/cart/cart-selectors";



const Header = ({currentUser,hidden}) =>(
    <div className="header">
        <Link className="logo-container" to ='/'>
            <Logo className="logo"/>
        </Link>     
        <div className="options">
            <Link className="option" to='/shop'>
                Shop
            </Link>
            <Link className="option" to='/contact'>
                Contact
            </Link>
          {
            currentUser ?
            <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
            :
            <Link className = "option" to ='/signin'>Sign In</Link>
          }
          < CartIcon/>          
          
        </div>
        {
            hidden ? null : <CartDropdown/>
        }

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);

