import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPostById } from '../services/postService.js'
import { getCommentsByPost, createComment } from '../services/commentService.jsx'
import PostDetail from '../components/post/postDetail.jsx'
import CommentList from '../components/comment/commentList.jsx'
import CommentForm from '../components/comment/commentForm.jsx'

const PostPage = () => {
  const { id } = useParams()
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
        setPost(postData)
        setComments(commentsData)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  const handleCommentSubmit = async (commentData) => {
    try {
      const newComment = await createComment({ ...commentData, postId: id })
      setComments([newComment, ...comments])
    } catch (error) {
      console.error('Error submitting comment:', error)
    }
  }

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