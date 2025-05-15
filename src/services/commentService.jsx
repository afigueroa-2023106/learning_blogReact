import API from './api'

export const getCommentsByPost = async (postId) => {
  try {
    const response = await API.get(`/comments/${postId}`)
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error)
    throw error
  }
}

export const createComment = async (postId, commentData) => {
  try {
    const response = await API.post(`/comments/${postId}`, commentData)
    return response.data;
  } catch (error) {
    console.error('Error creating comment:', error)
    throw error
  }
}