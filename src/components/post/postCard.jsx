import React from 'react'
import { Link } from 'react-router-dom'
import './post.css'

const PostCard = ({ post }) => {
  console.log('Datos del post:', post)

  if (!post) return null

  return (
    <div className="post-card">
      <h3>{post.title || 'Sin título'}</h3>
      <p className="post-content">{post.content || 'Sin contenido'}</p>
      {post.course ? (
        <p className="course-info">
          Curso: {post.course.title || 'Curso no especificado'}
        </p>
      ) : (
        <p className="course-info">Curso no disponible</p>
      )}
      <Link to={`/post/${post._id || post.id}`} className="view-link">
        Ver detalles
      </Link>
    </div>
  )
}

export default PostCard
