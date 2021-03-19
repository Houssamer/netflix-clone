import React, { useState } from 'react';
import logo from '../logo.png';
import './LoginScreen.css';
import SignInScreen from './SignInScreen';

function LoginScreen() {

    const [signIn, setSignIn] = useState(true);


    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img 
                    src={logo} 
                    alt="logo" 
                    className="loginScreen__logo"
                />
                {signIn && <button className="loginScreen__signIn" onClick={() => setSignIn(false)}>Sign In</button>}

                <div className="loginScreen__shadow" />
            </div>
            {
                !signIn ? <SignInScreen /> : (
                    <div className="loginScreen__content">
                        <h1>Unlimited movies, TV shows, and more.</h1>
                        <h3>Watch anywhere. Cancel anytime.</h3>
                        <h5>Ready to watch? Enter your email to create or restart your membership.</h5>
                        <form className="loginScreen__form">
                            <input 
                                type="email" 
                                className="loginScreen__input"
                                placeholder="Email"
                                required
                            />
                            <button type='submit' className="loginScreen__button" onClick={() => setSignIn(false)}>Get Started &gt;</button>
                        </form>
                </div>
                )
            }
        </div>
    )
}

export default LoginScreen
