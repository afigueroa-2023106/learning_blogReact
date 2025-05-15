import API from './api'

export const getCourses = async () => {
  try {
    const response = await API.get('/course/')
    return response.data.courses
  } catch (error) {
    console.error('Error al obtener cursos:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    })
    throw error
  }
}

export const createCourse = async (courseData) => {
  try {
    const response = await API.post('/course', courseData)
    return response.data
  } catch (error) {
    console.error('[CourseService] Error al crear curso:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
    })
    throw error
  }
}
