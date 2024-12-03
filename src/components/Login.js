import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidaData } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";


const Login = () =>{
    const[isSignInFort,setIsSignInForm] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    // const name = useRef(null);
    const handleButtonClick =()=>{
        console.log(email.current.value);
        console.log(password.current.value);
        // console.log(name.current.value);
        const message = checkValidaData(email.current.value,password.current.value);
        setErrorMessage(message);


        if(!isSignInFort){
            //Sign Up
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
         .then((userCredential) => {
    
          const user = userCredential.user;
          console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" +errorMessage);
    // ..
  });


        }else{
            //Sign In
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
    
           const user = userCredential.user;
           
           console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    setErrorMessage(errorCode +"-" +errorMessage);
  });

        }
    }
    const toggleSignInForm =() =>{
        setIsSignInForm(!isSignInFort);
    }
    return(
        <di>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/8e8ff9d3-17b4-4ce1-b571-06ba4e025cca/web_collection/IN-en-20241125-TRIFECTA-649c9db8-a195-4f78-a2e6-f4a02bda21f6_large.jpg"
                alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInFort ? "Sign In" : "Sign Up"}</h1>
                {!isSignInFort && <input 
                // ref={name}
                type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>}
                <input 
                ref={email}
                type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>
                <input
                ref={password}
                type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>
                <p className="text-red-600">{errorMessage}</p>
                <button onClick={handleButtonClick} className="py-4 my-6 bg-red-700 w-full rounded-lg">{isSignInFort ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{!isSignInFort ? "New to netflix? Sign Up Now" : "Already registered Sign In now"}</p>
            </form>
        </di>
    )
}

export default Login;