import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getPostById } from '../services/postService.js'
import { getCommentsByPost, createComment } from '../services/commentService.jsx'
import PostDetail from '../components/post/postDetail.jsx'
import CommentList from '../components/comment/commentList.jsx'
import CommentForm from '../components/comment/commentForm.jsx'
import '../pages/postPage.css'

const PostPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postData, commentsData] = await Promise.all([
          getPostById(id),
          getCommentsByPost(id)
        ])

        setPost(postData.post)
        const orderedComments = (commentsData.comments || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
        setComments(orderedComments)

        console.log('Comentarios ordenados:', orderedComments.map(c => c.createdAt))
      } catch (error) {
        console.error('Error al obtener datos:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  const handleCommentSubmit = async (commentData) => {
    try {
      await createComment({ ...commentData, postId: id })

      const commentsData = await getCommentsByPost(id)

      const orderedComments = (commentsData.comments || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      )
      setComments(orderedComments)
    } catch (error) {
      console.error('Error al enviar el comentario:', error)
    }
  }

  if (loading) return <div>Loading...</div>
  if (!post) return <div>Post not found</div>

  return (
    <div className="post-page">
      <button className="back-button" onClick={() => navigate('/')}>
        ← Volver a los cursos
      </button>

      <PostDetail post={post} />
      <CommentForm onSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  )
}

export default PostPage
