import formatDate from '../../utils/formatDate'

const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <div className="comment-header">
        <strong>{comment.author}</strong>
        <span>{formatDate(comment.createdAt)}</span>
      </div>
      <div className="comment-content">{comment.content}</div>
    </div>
  )
}

export default CommentItem