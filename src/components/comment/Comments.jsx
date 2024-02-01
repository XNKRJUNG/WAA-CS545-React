// import axios from "axios"
import React, { useState } from "react"
import Comment from "./Comment"

const Comments = props => {
  const { postDetails } = props
  console.log(postDetails.comments)

  return <div>{postDetails.comments ? postDetails.comments.map(c => <Comment id={c.id} comment={c.name} key={c.id} />) : null}</div>
}

export default Comments
