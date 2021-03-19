import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignInScreen.css'

function SignInScreen() {
    const email = useRef(null);
    const password = useRef(null);

    function SignUp(e) {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            email.current.value,
            password.current.value
        ).then((userAuth) => console.log(userAuth))
        .catch(error => alert(error.message));
    }

    function SignIn(e) {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            email.current.value,
            password.current.value
        ).then(userAuth => console.log(userAuth))
        .catch(error => alert(error.message));
    }

    return (
        <div className="signInScreen">
            <h1>Sign In</h1>
            <form className="signInScreen__form">
                <input 
                    type="email"
                    className="signInScreen__email"
                    placeholder="Email"
                    ref={email}
                    required
                />
                <input 
                    type="password" 
                    className="signInScreen__password"
                    placeholder="Password"
                    required
                    ref={password}
                />
                <button type="submit" className="signInScreen__signIn" onClick={SignIn}>Sign In</button>
            </form>
            <p>
                <span className="signInScreen__text">New to Netflix? </span>
                <span className="signInScreen__signUp" onClick={SignUp}>Sign up now.</span>
            </p>
        </div>
    )
}

export default SignInScreen
