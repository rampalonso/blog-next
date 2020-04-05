import React, { useState, useEffect } from 'react'
import Axios from 'axios'


const Comments = ({ id }) => {

  const [comments, setComments] = useState()
  const [number, setNumber] = useState(0)

  useEffect(() => {
    if (number > 0) {
      Axios.get(`${process.env.API_BLOG}/posts/${id}/comments`)
        .then(resp => resp.data)
        .then(comments => setComments(comments))
    }
  }, [number])

  if (!comments) return (
    <div>
      <a onClick={() => setNumber(number + 1)}>Cargar comentarios</a>
    </div>
  )

  return (
    <div>
      <h2>Comments</h2>
      {
        comments.map(c => (
          <div key={c.id}>
            <h3>{c.name}</h3>
            <p>{c.body}</p>
            <span>Escrito por: {c.email}</span>
          </div>
        ))
      }
    </div>
  )

}

export default Comments