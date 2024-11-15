import { createContext } from "react";
// Step 1 Create context
export const AuthContext = createContext();


const AuthProvider = () => {
    // Step 2 Return AuthContext Provider
    return <AuthContext.Provider></AuthContext.Provider>
};

export default AuthProvider;