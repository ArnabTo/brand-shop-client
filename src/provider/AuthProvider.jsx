import {GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithPopup } from "firebase/auth"
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const provider = new GoogleAuthProvider();

    const [user, serUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInwithGoogle = () =>{
        return signInWithPopup(auth, provider)
    }
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
  
    const updateUser = (displayName, photoURL) =>{
        setLoading(true)
        return updateProfile(auth.currentUser,{displayName, photoURL})
    }
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth);
    }
 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            serUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const authFunc = {createUser, signInUser, updateUser, signOutUser, user, loading, signInwithGoogle}
    return (
        <AuthContext.Provider value={authFunc}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;