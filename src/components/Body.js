import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { useEffect } from "react";
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () =>{

    const dispatch  = useDispatch();

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid,email,displayName } = user;
              dispatch(addUser({
                uid : uid,
                email : email,
                displayName : displayName
              }));
              
            } else {
              dispatch(removeUser())
            }
          });
          
    },[])

    // Routing
    const appRouter = createBrowserRouter([
        {
            path : "/",
            element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
    ])

    return(

        <>
      <RouterProvider router={appRouter} />
        </>

    );
};

export default Body;