import API from './api'

export const getPosts = async (course = null) => {
  try {
    const url = course ? `/posts?course=${course}` : '/posts'
    const response = await API.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error;
  }
}

export const getPostById = async (id) => {
  try {
    const response = await API.get(`/posts/${id}`)
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error)
    throw error;
  }
}