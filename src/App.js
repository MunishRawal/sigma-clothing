import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {createUserProfileDocument, auth} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user-action';
import CheckoutPage from './pages/checkout/checkout-component';


class App extends React.Component{

  unsubscribeFromAuth = null

  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      const userRef = await createUserProfileDocument(userAuth);
      if(userAuth)
      {
        userRef.onSnapshot(snapShot =>{
          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
        });
        });
        
      }
      else{
        setCurrentUser(userAuth)        
      }     
    
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component= {HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to ='/' />) : (<SignInAndSignUp/>)} />
          <Route exact path='/checkout' component= {CheckoutPage}/>
  
        </Switch>
        
      </div>
    );
  }

}

const mapStateToProps =({user}) =>({
  currentUser : user.currentUser
});
 
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
