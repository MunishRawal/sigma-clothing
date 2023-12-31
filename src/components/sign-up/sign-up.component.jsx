import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-buttom/custom-button.component";
import { createUserProfileDocument, auth } from "../../firebase/firebase.utils";
import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();


        this.state={
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password!==confirmPassword){
            alert("Passwords doesnt match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password 
            )
            await createUserProfileDocument(user, {displayName});
            this.setState(
                {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            );

        }catch(error){
            console.error(error);

        }

    }

    handleChange = event =>{
        const{name, value} = event.target;
        this.setState({[name]: value});
    }


    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I dont have an account</h2>
                <span>Sign in with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    name = 'displayName'
                    type = 'text'
                    value ={displayName}
                    onChange={this.handleChange}
                    label='Display Name'
                    required
                    />
                     <FormInput
                    name = 'email'
                    type = 'email'
                    value ={email}
                    onChange={this.handleChange}
                    label='Email'
                    required
                    />
                     <FormInput
                    name = 'password'
                    type = 'password'
                    value ={password}
                    onChange={this.handleChange}
                    label='Password'
                    required
                    />
                     <FormInput
                    name = 'confirmPassword'
                    type = 'password'
                    value ={confirmPassword}
                    onChange={this.handleChange}
                    label='Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;