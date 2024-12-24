import { useRef, useState } from "react";
import { BG_URL } from "../utils/constants";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {


    // Checking sign in form
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    // Form Handling (Validation)
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleButtonClick = () => {

        // console.log(email.current.value)
        // console.log(password.current.value);

        // Validate the form data
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        // Signin / SignUP logic
        if (!isSignInForm) {
            // Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage)
                });
        } else {
            // Sign in
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage)
                });
        }
    }

    return (

        <div>
            <Header />
            <div className="absolute">
                <img src={BG_URL} alt="bg-image" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4"> {isSignInForm ? "Sign In" : "Sign Up"}</h1>

                {!isSignInForm && (<input type="text" placeholder="Your Name" className="p-2 my-4 w-full bg-transparent text-gray-100 outline-none border-2 border-gray-700 " />)}

                <input ref={email} type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-transparent text-gray-100 outline-none border-2 border-gray-700 " />

                <input ref={password} type="password" placeholder="Password" className="p-2 my-4 w-full bg-transparent text-gray-100 outline-none border-2 border-gray-700 " />

                <p className="text-red-500 font-semibold py-2">{errorMessage}</p>
                <button className="py-4  my-6 bg-red-700 w-full font-semibold rounded-md" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className="font-semibold cursor-pointer hover:underline" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign up now." : "Already have Account! Sign In Now"}</p>
            </form>
        </div>

    );
};

export default Login;