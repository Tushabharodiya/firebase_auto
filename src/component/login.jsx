import React from 'react';
import { auth, provider, signInWithPopup } from './firebase';

const Login = () => {
    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result.user);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Sign in with Google</button>
        </div>
    );
};

export default Login;