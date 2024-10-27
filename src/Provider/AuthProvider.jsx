import React, { createContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import auth from "../authentication/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    const userInfo = { user, loading, createUser, loginUser, logOut };

    return <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
