import API from './api'

export const getCommentsByPost = async (postId) => {
  try {
    const response = await API.get(`/comment/post/${postId}`)
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error)
    throw error
  }
}

export const createComment = async (commentData) => {
  try {
    const response = await API.post('/comment', commentData)
    return response.data
  } catch (error) {
    console.error('Error creating comment:', error)
    throw error
  }
}

export const getPostComments = getCommentsByPost
export const addComment = createComment