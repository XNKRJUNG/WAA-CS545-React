import axios from "axios"
import React, { useEffect, useState } from "react"

const PostDetails = props => {
  const [postDetails, setPostDetails] = useState({})

  const fetchPost = postId => {
    axios
      .get(`http://localhost:8080/api/v1/posts/${postId}`)
      .then(response => {
        setPostDetails(response.data)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const deletePost = postId => {
    console.log("Delete Id", postId)
    axios
      .delete(`http://localhost:8080/api/v1/posts/${postId}`)
      .then(response => {
        console.log(response)
        props.handler()
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    fetchPost(props.id)
  }, [props.id])

  return (
    <div className="postDeatilsContainer">
      <div className="header">
        <h4>{postDetails.title}</h4>
        <h3>{postDetails.author}</h3>
      </div>
      <div className="content">
        <h2>{postDetails.content}</h2>
      </div>
      <div className="actions">
        <button>edit</button>
        <button onClick={() => deletePost(props.id)}>delete</button>
      </div>
    </div>
  )
}

export default PostDetails
