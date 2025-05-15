import { useState } from 'react'

const CommentForm = ({ postId, onCommentSubmit }) => {
  const [formData, setFormData] = useState({
    author: '',
    content: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.author.trim() || !formData.content.trim()) {
      alert('Por favor completa todos los campos')
      return;
    }
    onCommentSubmit(postId, formData);
    setFormData({
      author: '',
      content: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <h3>Deja un comentario</h3>
      <div className="form-group">
        <input
          type="text"
          name="author"
          placeholder="Tu nombre"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <textarea
          name="content"
          placeholder="Tu comentario"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Enviar comentario</button>
    </form>
  )
}

export default CommentForm