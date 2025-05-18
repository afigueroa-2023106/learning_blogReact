import React, { useEffect, useState } from 'react'
import { getPosts } from '../services/postService.js'
import { getCourses } from '../services/courseService.js'
import PostList from '../components/post/postList.jsx'
import CourseFilter from '../components/courseFilter.jsx'
import './homePage.css'

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(
    localStorage.getItem('selectedCourse') || ''
  )

  useEffect(() => {
    const fetchData = async () => {
      console.log('Iniciando carga de datos...')
      try {
        const [postsData, coursesData] = await Promise.all([
          getPosts(),
          getCourses(),
        ])

        console.log('postsData:', postsData)
        console.log('coursesData:', coursesData)

        setPosts(Array.isArray(postsData) ? postsData : [])
        setCourses(Array.isArray(coursesData) ? coursesData : [])
      } catch (error) {
        console.error('Error al cargar datos:', error)
      }
    }

    fetchData()
  }, [])

  console.log('selectedCourse:', selectedCourse)
  posts.forEach(p => {
    console.log(`Post ${p._id} tiene course:`, p.course, 'tipo:', typeof p.course)
  })

  const filteredPosts = posts.filter(post => {
    const courseIdFromPost = typeof post.course === 'string'
      ? post.course
      : post.course?._id
    return selectedCourse ? courseIdFromPost === selectedCourse : true
  })

  return (
  <div className="homepage-container">
    <h1>Learning Blog</h1>
    <CourseFilter
      courses={courses}
      selectedCourse={selectedCourse}
      onCourseChange={(courseId) => {
        setSelectedCourse(courseId)
        localStorage.setItem('selectedCourse', courseId || '')
      }}
    />
    <PostList posts={filteredPosts} />
  </div>
)

}

export default HomePage
