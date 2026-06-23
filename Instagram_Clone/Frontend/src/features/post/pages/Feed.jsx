import React,{useState,useEffect} from 'react'
import Post from '../components/Post'
import '../style/feed.scss'
import{usePost} from '../hooks/usePost'

const Feed = () => {
    const {handleFeed,loading,post,feed} = usePost();

    useEffect(()=>{
        handleFeed()
    },[])

    if(loading || !feed){
        return (<main><h1>Feed is loading...</h1></main>)
    }



  return (
    <div>
      <main>
        <div className="feed-container">
            <div className="posts">
                {feed.map(
                    post=>{
                      return <Post user={post.user} post={post} 
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
