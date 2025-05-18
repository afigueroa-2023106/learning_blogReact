import { useState } from 'react'

const CommentForm = ({ postId, onSubmit }) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !content.trim()) {
      alert('Por favor ingresa nombre y comentario')
      return
    }
    const newComment = {
      postId,
      name,
      content,
      createdAt: new Date().toISOString(),
    }
    onSubmit(newComment)
    setName('')
    setContent('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tu nombre"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Tu comentario"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <button type="submit">Enviar comentario</button>
    </form>
  )
}

export default CommentForm
