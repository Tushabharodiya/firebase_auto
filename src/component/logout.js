// src/Logout.js
import React from 'react';
import { auth, signOut } from './firebase';

const Logout = () => {
    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('User signed out');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Logout</h1>
            <button onClick={handleLogout}>Sign out</button>
        </div>
    );
};

export default Logout;
