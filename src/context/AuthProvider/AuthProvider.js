import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside the current user', currentUser)
            setUser(currentUser)

        })
        return () => {
            unsubscribe();
        }
    }, [])

    const providerLogin = (provider) => {
        console.log(provider)
        return signInWithPopup(auth, provider);
    }



    const createUser = (email, password, name, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password, name, photoURL);
    }

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = { createUser, logIn, user, logOut, providerLogin }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;