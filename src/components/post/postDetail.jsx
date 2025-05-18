import React from 'react'
import './post.css'

const PostDetail = ({ post }) => {
  console.log('Post recibido en PostDetail:', post)

  if (!post) return null;

  const formattedDate = post.date ? new Date(post.date).toLocaleDateString() : 'Fecha no disponible'
  const courseTitle = post.course?.title || 'Curso no disponible'

  return (
    <div className="post-detail">
      <h2>{post.title || 'Sin título'}</h2>
      <p>{post.content || 'Sin contenido'}</p>
      <p><strong>Curso:</strong> {courseTitle}</p>
      <p><strong>Fecha:</strong> {formattedDate}</p>
    </div>
  )
}

export default PostDetail
