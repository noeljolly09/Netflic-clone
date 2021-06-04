import React, { useState } from 'react';
import './LoginScreen.css';
import SignInscreen from './SignInScreen.js';

function LoginScreen() {
const [signIn, setSignIn] = useState(false);

    return (
        <div className="login">
            <div className="login_background">
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Logo" className="login_logo" />

                <button 
                className="login_button" 
                onClick={() => setSignIn(true)}>Sign In
                </button>

                <div className="login_gradient" />
            </div>
            <div className="login_body">
                {signIn ? (
                    <SignInscreen />
                ) :(
                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. Cancel at anytime</h2>
                    <h3>Ready to watch? Enter email to create or restart the subscription.</h3>
                    <div className="login_input">
                        <form>
                            {/* <input type="email" 
                            placeholder="Email Address"/> */}
    
                            <button 
                            className="login_form_button" 
                            onClick={() => setSignIn(true)}>Get Started
                            </button>
                        </form>
                    </div>
                    </>
                )}
               
            </div>
        </div>
    )
}

export default LoginScreen
