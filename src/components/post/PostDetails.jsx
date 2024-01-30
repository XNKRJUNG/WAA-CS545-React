import React from "react"

const PostDetails = props => {
  const { title, author, description } = props

  return (
    <div className="postDeatilsContainer">
      <div className="header">
        <h4>{title}</h4>
        <h3>{author}</h3>
      </div>
      <div className="content">
        <h2>{description}</h2>
      </div>
      <div className="actions">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  )
}

export default PostDetails
