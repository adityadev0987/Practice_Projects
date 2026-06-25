import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router'
import Post from '../components/Post'
import '../style/feed.scss'
import{usePost} from '../hooks/usePost'
import CreatePost from './CreatePost'

const Feed = () => {
    const {handleFeed,loading,post,feed,handleLike,handleUnLike} = usePost();

    useEffect(()=>{
        handleFeed()
    },[])

    if(loading || !feed){
        return (<main><h1>Feed is loading...</h1></main>)
    }
    // const navigate = useNavigate()
    // function handleCreatePost(){
    //   navigate('/createPost')
    // }


  return (
    <div>
      <main>
        <div className="createPost-conatiner">
          <h1>Instagram</h1>
          <div className="Post-button">
            <Link to='/CreatePost' className='createPost-Link'>Create Post</Link>
          </div>
        </div>
        <div className="feed-container">
            <div className="posts">
                {feed.map(
                    post=>{
                      return <Post user={post.user} post={post} handleLike={handleLike} handleUnLike={handleUnLike}
                      loading={loading} />
                    }
                )}
            </div>
        </div>
      </main>
    </div>
  )
}

export default Feed
