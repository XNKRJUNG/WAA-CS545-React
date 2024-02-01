import axios from "axios"
import React, { useEffect, useState } from "react"
import Comments from "../comment/Comments"

const PostDetails = props => {
  const [postDetails, setPostDetails] = useState({})
  console.log(postDetails)

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
    axios
      .delete(`http://localhost:8080/api/v1/posts/${postId}`)
      .then(response => {
        console.log(response.data)
        props.handler()
        setPostDetails({})
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  useEffect(() => {
    if (props.id) {
      fetchPost(props.id)
    }
  }, [props.id])

  return (
    <>
      {postDetails ? (
        <div className="postDeatilsContainer">
          <div className="header">
            <h4>{postDetails.title}</h4>
            <h3>{postDetails.author}</h3>
          </div>
          <div className="content">
            <h2>{postDetails.content}</h2>
          </div>
          {props.id ? (
            <div className="actions">
              <button>edit</button>
              <button onClick={() => deletePost(props.id)}>delete</button>
            </div>
          ) : null}
          <h3>COMMENTS</h3>
          <div style={{ border: "2px solid #4f81bd " }}>
            <Comments postDetails={postDetails} />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default PostDetails
