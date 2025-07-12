import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("")

    const handleLogin = () => {

       if(email === ""){
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
            navigate("/home")
        }, 1000);
       }
    };

    return (
        <div className='gredient h-screen'>
            <div className='text-center p-40 flex justify-center'>
                <div className='flex flex-col items-center bg-amber-100 rounded-3xl w-140 pt-24 '>
                    <input
                        type="email"
                        placeholder="Enter your name"
                        onChange={(e)=> setEmail(e.target.value)}
                        className="w-100 px-4  py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <input
                        type="text"
                        placeholder="Enter your Password"
                        className="w-100 px-4 mt-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />

                    <div className="m-auto flex justify-center mt-20">
                        <button
                            onClick={handleLogin} className="btn-color w-60 border-4 rounded-md ">Login</button>
                    </div>
                    {loading && <p>Loading...</p>}
                </div>
            </div>
        </div>
    );
};

export default Login;
