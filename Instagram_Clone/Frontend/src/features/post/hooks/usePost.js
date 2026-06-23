import { useContext,useState } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../services/post.api";

export const usePost = ()=>{

    const context = useContext(PostContext);

    const{loading,setLoading,feed,setFeed,post,setPost} = context;

    async function handleFeed(){
        setLoading(true);
        const response = await getFeed();
        setFeed(response.feed);
        setLoading(false)
    }

    return{
        handleFeed,loading,feed,post
    }
}