import { useContext } from "react";
import { Authcontext } from "../auth.context";
import { register,login,getMe } from "../services/auth.api";


export const useAuth = ()=>{

    const context = useContext(Authcontext);

    const{user,loading,setUser,setLoading} = context;

    async function handleLogin(username,password){
        setLoading(true);
        const response = await login(username,password)
        setUser(response.user);
        setLoading(false);
    }
    async function handleRegister(username,email,password){
        setLoading(true);
        const response = await register(username,email,password)
        setUser(response.user);
        setLoading(false);
    }

    return{
        user,loading,handleLogin,handleRegister
    }
}