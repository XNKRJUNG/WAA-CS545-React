import React from "react"

const Comment = props => {
  const { id, comment } = props
  return (
    <div>
      <h3>Id: {id}</h3>
      <h3>Commented: "{comment}"</h3>
    </div>
  )
}

export default Comment
