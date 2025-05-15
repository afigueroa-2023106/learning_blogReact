import PostCard from './postCard'

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <p>No hay publicaciones disponibles</p>
      )}
    </div>
  )
}

export default PostList