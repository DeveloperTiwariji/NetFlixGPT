import { useState } from "react";
import Header from "./Header";

const Login = () =>{
     const[isSignInFort,setIsSignInForm] = useState(true);
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
            <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInFort ? "Sign In" : "Sign Up"}</h1>
                {!isSignInFort && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800 rounded-lg"/>
                <button className="py-4 my-6 bg-red-700 w-full rounded-lg">{isSignInFort ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{!isSignInFort ? "New to netflix? Sign Up Now" : "Alread exit Sign In now"}</p>
            </form>
        </di>
    )
}

export default Login;