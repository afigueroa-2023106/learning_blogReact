import CommentItem from './commentItem.jsx'
import "./comment.css"

const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      <h3>Comentarios ({comments.length})</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment._id || comment.id || Math.random()} comment={comment} />
        ))
      ) : (
        <p>No hay comentarios aún. Sé el primero en comentar.</p>
      )}
    </div>
  )
}

export default CommentList
