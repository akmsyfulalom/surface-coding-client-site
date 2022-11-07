import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../../firebase/firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {


    const createUser = (email, password, name, photoURL) => {
        return createUserWithEmailAndPassword(auth, email, password, name, photoURL)
    }

    const authInfo = { createUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;