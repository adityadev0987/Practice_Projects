import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { login,register,getMe } from "../services/auth.api";

export const useAuth = ()=>{
    const context = useContext(AuthContext);

    const{ user,setUser,loading,setLoading} = context;

    async function handleRegister(username,email,password){
        setLoading(true);

        const response = await register(username,email,password)
        
        setUser(response.user);

        setLoading(false);
    }
    async function handleLogin(username,password){
        setLoading(true);

        const response = await login(username,password)
        
        setUser(response.user);

        setLoading(false);
    }
    return{
        user,loading, handleLogin,handleRegister
    }
}