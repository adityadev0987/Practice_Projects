import { useContext,useEffect,useState } from "react";
import { PostContext } from "../post.context";
import { getFeed,unlikePost,likePost,createPost,getFollowingStatus,followUser,unfollowUser } from "../services/post.api";


export const usePost = ()=>{

    const context = useContext(PostContext);

    const{loading,setLoading,feed,setFeed,post,setPost} = context;

    async function handleFeed(){
        setLoading(true);
        const response = await getFeed();
        setFeed(response.feed.reverse());
        setLoading(false)
    }

    async function handleLike(post){
        const response = await likePost(post);
        await handleFeed()
    }
    async function handleUnLike(post){
        const response = await unlikePost(post);
        await handleFeed()
    }
    async function handleCreatePost(image,caption){
        setLoading(true)
        const response = await createPost(image,caption);
        setFeed([response.post,...feed])
        setLoading(false)
        await handleFeed()
    }
    async function handleFollow(){
        const response = await getFollowingStatus();
        return response;
    }

    async function handleFollowUser(username){
        const response = await followUser(username);
        return response;
    }

    async function handleUnfollowUser(username){
        const response = await unfollowUser(username);
        return response;
    }

    useEffect(()=>{
        handleFeed()
    },[])


    return{
        handleFeed,loading,feed,post,handleUnLike,handleLike,handleCreatePost,handleFollow,handleFollowUser,handleUnfollowUser
    }
}