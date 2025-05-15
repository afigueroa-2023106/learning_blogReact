import API from './api'

export const getCommentsByPost = async (postId) => {
  try {
    // Prueba con query param (común para filtrar)
    const response = await API.get(`/comment`, { params: { postId } })
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