import React from "react"
import "./post.css"

const Post = props => {
  const { id, title, author } = props

  return (
    <div className="post">
      <h3>Id: {id}</h3>
      <h3>Title: {title}</h3>
      <h3>Author: {author}</h3>
    </div>
  )
}

export default Post
