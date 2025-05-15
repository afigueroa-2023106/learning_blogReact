import formatDate from '../../utils/formatDate'

const PostDetail = ({ post }) => {
  return (
    <article className="post-detail">
      <h1>{post.title}</h1>
      <div className="post-meta">
        <span>{post.course.name}</span>
        <span>{formatDate(post.createdAt)}</span>
      </div>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}

export default PostDetail