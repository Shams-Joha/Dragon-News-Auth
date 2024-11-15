import { createContext, useState } from "react";
// Step 1 Create context
export const AuthContext = createContext();

// Step 7 Now we can access the main component as children of AuthProvider
const AuthProvider = ({ children }) => {

    // Step 3 Declare state for storing data.
    const [user, setUser] = useState(null);
    // Step 4 Declare Object to pass data through context
    const authInfo = {
        user,
        setUser
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