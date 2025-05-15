import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../services/postService.js'
import { getCommentsByPost, createComment } from '../services/commentService.jsx'
import PostDetail from '../components/post/postDetail.jsx'
import CommentList from '../components/comment/commentList.jsx'
import CommentForm from '../components/comment/commentForm.jsx'
import '../pages/postPage.css'

const PostPage = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('ID del post desde URL:', id)

        const [postData, commentsData] = await Promise.all([
          getPostById(id),
          getCommentsByPost(id)
        ])

        console.log('Post recibido desde el backend:', postData)
        console.log('Comentarios recibidos:', commentsData)

        // EXTRAER solo el objeto post y arreglo comments
        setPost(postData.post)  
        setComments(Array.isArray(commentsData.comments) ? commentsData.comments : [])
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
      const newComment = await createComment({ ...commentData, postId: id })
      console.log('Nuevo comentario enviado:', newComment)
      setComments([newComment, ...comments])
    } catch (error) {
      console.error('Error al enviar el comentario:', error)
    }
  }

  useEffect(() => {
    if (post) {
      console.log('Datos del post (confirmado):', post)
    }
  }, [post])

  if (loading) return <div>Loading...</div>
  if (!post) return <div>Post not found</div>

  return (
    <div className="post-page">
      <PostDetail post={post} />
      <CommentForm onSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  )
}

export default PostPage
