import { Link } from 'react-router-dom'
import formatDate from '../../utils/formatDate'

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h3>{post.title}</h3>
      <p className="post-meta">
        {post.course.name} • {formatDate(post.createdAt)}
      </p>
      <p className="post-excerpt">{post.excerpt}</p>
      <Link to={`/post/${post._id}`} className="read-more">
        Leer más
      </Link>
    </div>
  )
}

export default PostCard