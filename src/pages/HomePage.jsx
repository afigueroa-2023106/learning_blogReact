import { useState, useEffect } from 'react'
import { getPosts } from '../services/postService.js'
import PostList from '../components/post/postList.jsx'
import CourseFilter from '../components/courseFilter.jsx'

const HomePage = () => {
  const [posts, setPosts] = useState([])
  const [courses, setCourses] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPostsAndCourses = async () => {
      try {
        const data = await getPosts(selectedCourse)
        setPosts(data.posts);
        setCourses(data.availableCourses)
        setLoading(false);
      } catch (error) {
        console.error('Error:', error)
        setLoading(false)
      }
    }

    fetchPostsAndCourses()
  }, [selectedCourse])

  if (loading) return <div>Cargando...</div>

  return (
    <div className="home-page">
      <h1>Blog de Aprendizaje</h1>
      <CourseFilter 
        courses={courses} 
        selectedCourse={selectedCourse} 
        onCourseChange={setSelectedCourse} 
      />
      <PostList posts={posts} />
    </div>
  )
}

export default HomePage