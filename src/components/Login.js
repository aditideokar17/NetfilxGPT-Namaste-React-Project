import { useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";

const Login = () =>{

    
    // Checking sign in form
    const [isSignIn, setIsSignInForm] = useState(true);
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignIn);
    }

    return (

        <div>
            <Header/>
            <div className="absolute">
            <img src={BG_URL} alt="bg-image"  className=""/>
            </div>

            <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{ isSignIn ?"Sign In" : "Sign Up"}</h1>
               
                {!isSignIn && (<input type="text" placeholder="Your Name" className="p-2 my-4 w-full bg-transparent text-gray-100 outline-none border-2 border-gray-700 "/>)}
                
                <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-transparent text-gray-100 outline-none border-2 border-gray-700 "/>
                
                <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-transparent text-gray-100 outline-none border-2 border-gray-700 "/>
                
                <button className="py-4  my-6 bg-red-700 w-full font-semibold rounded-md">{ isSignIn ?"Sign In" : "Sign Up"}</button>
                
                <p className="font-semibold cursor-pointer hover:underline" onClick={toggleSignInForm}>{ isSignIn ?"New to Netflix? Sign up now." : "Already have Account! Sign In Now"}</p>
            </form>
        </div>

    );
};

export default  Login;