import API from './api';

export const getPosts = async () => {
  try {
    const response = await API.get('/post');
    return response.data;
  } catch (error) {
    console.error('Error al obtener posts:', {
      url: error.config?.url,
      status: error.response?.status
    });
    throw error;
  }
};

export const createPost = async (postData) => {
  try {
    const response = await API.post('/post', postData);
    return response.data;
  } catch (error) {
    console.error('Error al crear post:', error);
    throw error;
  }
};

export const getPostById = async (id) => {
  try {
    const response = await API.get(`/post/${id}`);
    console.log('getPostById response.data:', response.data); // <-- log para ver qué devuelve
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
};
