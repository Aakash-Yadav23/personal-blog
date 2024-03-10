'use client'

import React, { useState } from 'react';

import MaxWidthWrapper from '@/components/wrapper/Maxwidthwrapper';
import './style.css'; // Import your custom CSS
import LoginForm from './LoginForm';
import Register from './RegisterForm';


const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('login'); // Initial active tab



    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Implement Google login logic here (e.g., using Google Sign-In API)

    return (
        <div className="grid grid-cols gap-2 w-auto  rounded-sm p-10 items-center justify-center bg-white text-black ">
            <div className="login-tabs flex justify-center items-center gap-5 ">
                <button
                    className={`login-tab-button px-5 p-1 rounded-sm ${activeTab === 'login' ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => handleTabClick('login')}
                >
                    Login
                </button>
                <button
                    className={`login-tab-button p-1 rounded-sm  px-5 ${activeTab === 'register' ? 'bg-blue-500 text-white' : ''}`}
                    onClick={() => handleTabClick('register')}
                >
                    Register
                </button>
            </div>

            {activeTab === 'login' ? (
                <LoginForm />
            ) : <Register />
            }

        </div>
    )
}

export default LoginPage;
