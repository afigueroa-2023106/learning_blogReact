import React from 'react'
import PostCard from './postCard.jsx'

const PostList = ({ posts }) => {
  console.log('Posts recibidos en Pos tList:', posts)

  if (!posts || posts.length === 0) {
    return <p>No hay publicaciones disponibles</p>
  }

  return (
    <div className="post-list">
      {posts.map(post => (
        <PostCard 
          key={post._id || post.id} 
          post={post} 
        />
      ))}
    </div>
  )
}

export default PostList