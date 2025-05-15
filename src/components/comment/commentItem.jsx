import formatDate from '../../utils/formatDate'

const CommentItem = ({ comment }) => {
  return (
    <div className="comment-item">
      <div className="comment-header">
        <strong>{comment.name || 'Anónimo'}</strong>
        <span>{comment.date ? formatDate(comment.date) : 'Fecha no disponible'}</span>
      </div>
      <div className="comment-content">{comment.content}</div>
    </div>
  )
}

export default CommentItem

