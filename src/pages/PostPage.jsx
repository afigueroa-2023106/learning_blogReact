import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../services/postService'
import { getCommentsByPost, createComment } from '../services/commentService'
import PostDetail from '../components/post/postDetail.jsx'
import CommentList from '../components/comment/commentList.jsx'
import CommentForm from '../components/comment/commentForm.jsx'

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const [postData, commentsData] = await Promise.all([
          getPostById(id),
          getCommentsByPost(id),
        ])
        setPost(postData)
        setComments(commentsData)
        setLoading(false)
      } catch (error) {
        console.error('Error:', error)
        setLoading(false)
      }
    }

    fetchPostAndComments()
  }, [id])

  const handleCommentSubmit = async (postId, commentData) => {
    try {
      const newComment = await createComment(postId, commentData)
      setComments([newComment, ...comments]);
    } catch (error) {
      console.error('Error al enviar comentario:', error)
    }
  }

  if (loading) return <div>Cargando...</div>
  if (!post) return <div>Publicación no encontrada</div>

  return (
    <div className="post-page">
      <PostDetail post={post} />
      <CommentForm postId={post._id} onCommentSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  )
}

export default PostPage