import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidaData } from "../utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addUser} from "../utils/userSlice";
import { BG_IMG, RADHA } from "../utils/constants";

const Login = () =>{
    const[isSignInFort,setIsSignInForm] = useState(true);
    const[errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useRef(null);
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
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: RADHA,
          }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            // navigate("/browse");
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            setErrorMessage(error.message); 
          });
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
          //  navigate("/browse");
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
                <img src= {BG_IMG}
                alt="logo" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInFort ? "Sign In" : "Sign Up"}</h1>
                {!isSignInFort && <input 
                ref={name}
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