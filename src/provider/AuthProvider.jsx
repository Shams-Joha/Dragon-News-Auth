import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

// Step 1 Create context
export const AuthContext = createContext();

// Step 7 Now we can access the main component as children of AuthProvider
const AuthProvider = ({ children }) => {

    const auth = getAuth(app);


    // Step 3 Declare state for storing data.
    const [user, setUser] = useState(null);

    // Sign Up New Users
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // SignOut
    const logOut = () => {
        return signOut(auth)
    }

    // Log In

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Declare observer to hold data

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe()
        }
    }, [])



    // Step 4 Declare Object to pass data through context
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        logIn
    }






    // Step 2 Return AuthContext Provider  Step 5 pass object as value.
    return <AuthContext.Provider value={authInfo}>
        {/* Step 6  go to main component & wrap main component with AuthProvider*/}
        {/* Now add this children here */}
        {
            children
        }
    </AuthContext.Provider>
};

export default AuthProvider;