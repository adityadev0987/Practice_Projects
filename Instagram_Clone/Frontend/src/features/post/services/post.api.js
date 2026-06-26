import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000/api/',
    withCredentials:true
})

export async function getFeed(){
    const response = await api.get('/post/feed');
    return response.data
}

export async function likePost(postId){
    const response = await api.post('/post/likes/'+postId);
    return response.data
}
export async function unlikePost(postId){
    const response = await api.post('/post/unlike/'+postId);
    return response.data
}
export async function createPost(image,caption){

    const formData = new FormData()

    formData.append('image',image)
    formData.append('caption',caption)
    const response = await api.post('/post/createPost',formData)
    return response.data

}
export async function getFollowingStatus(){
    const response = await api.get('/users/following/status')
    return response.data
}

export async function followUser(username){
    const response = await api.post(`/users/follow/${username}`)
    return response.data
}

export async function unfollowUser(username){
    const response = await api.post(`/users/unfollow/${username}`)
    return response.data
}