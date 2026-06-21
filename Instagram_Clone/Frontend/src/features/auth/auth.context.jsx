import { createContext } from "react";
import { useState } from "react";

export const Authcontext = createContext();

export const AuthProvider = ({children})=>{
    const[user,setUser]=useState(null);
    const[loading,setLoading] = useState(false);

    return(
        <Authcontext.Provider value={{user,loading,setUser,setLoading}}> 
            {children}
        </Authcontext.Provider>
    )
}