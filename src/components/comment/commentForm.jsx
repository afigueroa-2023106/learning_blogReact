import { useState } from 'react'

const CommentForm = ({ postId, onSubmit }) => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!name.trim() || !content.trim()) {
      setError('Por favor ingresa nombre y comentario.')
      return
    }

    if (content.trim().length < 5) {
      setError('El comentario debe tener al menos 5 caracteres.')
      return
    }

    const newComment = {
      postId,
      name: name.trim(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
    }

    try {
      await onSubmit(newComment)
      setName('')
      setContent('')
    } catch (err) {
      const msg = err?.response?.data?.errors?.[0]?.msg || 'Error al enviar el comentario.'
      setError(msg)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red', marginBottom: '8px' }}>{error}</p>}

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
