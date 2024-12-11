import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const handalSignOut =()=>{
        signOut(auth).then(()=>{
            //Sign-out successful.
            // navigate("/");
        }).catch((error) =>{
            // An error happend
            navigate("/error");
        }); 
    };

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              navigate("/browse");
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/");
            }
          });

          return() => unsubscribe();
       }, []); 


    return(
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
           <img 
           className="w-44 "
           src= {LOGO}
           alt="logo" />

           { user && <div className="flex p-2">
            <img 
            className="w-12 h-12 cursor-pointer"
            alt="usericon" 
            src={user.photoURL} />
            <button 
            onClick={handalSignOut}
             className="font-bold text-white">(sign Out)</button>
           </div>}
        </div>
    )
} 

export default Header;