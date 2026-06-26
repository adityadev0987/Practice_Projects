import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router'
import Post from '../components/Post'
import '../style/feed.scss'
import{usePost} from '../hooks/usePost'
import CreatePost from './CreatePost'

const Feed = () => {
    const {handleFeed,loading,post,feed,handleLike,handleUnLike,handleFollow,handleFollowUser,handleUnfollowUser} = usePost();
    const [followStatus, setFollowStatus] = useState({}); // Store follow status by username

    useEffect(()=>{
        handleFeed();
        fetchFollowStatus();
    },[])

    const fetchFollowStatus = async () => {
        try {
            const response = await handleFollow();
            if (response && response.followingStatusRecord) {
                // Create object with username as key and status as value
                const statusMap = {};
                response.followingStatusRecord.forEach(record => {
                    statusMap[record.followee] = record.status;
                });
                setFollowStatus(statusMap);
            }
        } catch (error) {
            console.error("Error fetching follow status:", error);
        }
    }

    const updateFollowStatus = (username, newStatus) => {
        setFollowStatus(prev => ({
            ...prev,
            [username]: newStatus
        }));
    }

    

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
          <div className="top-navbar">
            <div className="Post-button">
            <Link to='/CreatePost' className='createPost-Link'>Create Post</Link>
          </div>
            <div className="profile-button">
              <Link to='/profile' className='profile-Link' >Your Profile </Link>
            </div>
          </div>
          
        </div>
        <div className="feed-container">
            <div className="posts">
                {feed.map(
                    post=>{
                      return <Post user={post.user} post={post} handleLike={handleLike} handleUnLike={handleUnLike} 
                      handleFollow={handleFollow} handleFollowUser={handleFollowUser} handleUnfollowUser={handleUnfollowUser} 
                      followStatus={followStatus} updateFollowStatus={updateFollowStatus}
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
