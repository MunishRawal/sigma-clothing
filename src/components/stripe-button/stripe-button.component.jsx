import React from "react";
import StripeCheckout from "react-stripe-checkout";



const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51NSxeoSIIUgstWnotfsN1i30uqToqK75LyQjvainV4iBtmz3XVKawWwC9duUY70At5LGr3GlSXk1wAqmuwcz95Gx00CVaULQJE' 
    
    const onToken = token=>{
    console.log(token);
    alert("payment Success")}


    return(
        <StripeCheckout
        name="Sigma Clothing ltd"
        description={`Your total is ₹${price}`}
        label="Pay Now with Stripe"
        billingAddress
        shippingAddress
        amount={priceForStripe}
        panelLabel="Pay Bill"
        currency="INR"
        token={onToken}
        stripeKey={publishableKey}
        image='https://svgsilh.com/svg/1157720.svg'

        />
    )


};

export default StripeCheckoutButton;


