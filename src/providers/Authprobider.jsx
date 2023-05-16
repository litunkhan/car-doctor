/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider, signInWithPopup  } from 'firebase/auth'
export const AuthContext = createContext()
const auth = getAuth(app)
const Authprobider = ({children}) => {
  const [user,setuser] = useState(null)
  const [loader,setloader] = useState(true)
  const providerr = new GoogleAuthProvider();

  const createUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const googleSingIn =()=>{
   setloader(true)
    return signInWithPopup(auth,providerr)
  }
  const singIn = (email,password)=>{
    setloader(true)
     return signInWithEmailAndPassword(auth,email,password)
  }
  
  useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth,curuser=>{
        setuser(curuser)
        setloader(false)
        return ()=>{
           unsubscribe()
        }
     })
  },[])

 

   const logout =()=>{
    setloader(true)
     return signOut(auth)
   }
    const userinfo ={
   user,
   loader,
   singIn,
   createUser,
   logout,
   googleSingIn
    }
    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprobider;