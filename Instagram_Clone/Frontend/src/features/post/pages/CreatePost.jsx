import React,{useRef, useState} from 'react'
import '../style/CreatePost.scss'
import { usePost } from '../hooks/usePost'
import { useNavigate } from 'react-router'


const CreatePost = () => {
    const{loading,handleCreatePost} = usePost()

    const [caption, setCaption] = useState('');
    const fileInput = useRef(null)
    const navigate = useNavigate()

    async function handleButton(e){
        e.preventDefault();
        const file = fileInput.current.files[0];
        await handleCreatePost(file,caption)
        navigate('/')
    }
    if(loading){
        return(
            <main>
                <h1>Creating Post</h1>
            </main>
        )
    }
  return (
    <div>
      <main>
        <div className="createPostBox">
            <h1>Create Post</h1>
        <form>
            <div className="file-conatiner">
            <label htmlFor='file'>Select Post </label>
            <input ref={fileInput} type='file' hidden id='file' name='file'/>
            </div>
            <input onChange={(e)=>{
                setCaption(e.target.value)
            }}
            value={caption} 
            type='text' name='caption' id='caption' placeholder='Enter your caption'/>
            <button onClick={handleButton}
            >Create Post</button>
        </form>
        </div>
      </main>
    </div>
  )
}

export default CreatePost

