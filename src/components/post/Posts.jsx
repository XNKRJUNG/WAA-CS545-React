import React, { useEffect } from "react"
import Post from "./Post"
import { useState } from "react"

import "./css/post.css"
import axios from "axios"

const Posts = props => {
  const [postState, setPostState] = useState([])

  const { title, handleSelectedPost, setter } = props

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/posts")
      setPostState(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchPosts()
    setter(() => fetchPosts)
  }, [])

  const handlePostClick = post => {
    if (handleSelectedPost) {
      handleSelectedPost(post)
    }
    setter(() => fetchPosts)
  }

  if (title && postState.length > 0) {
    const updatedPosts = [...postState]
    updatedPosts[0].title = title
    // Note: We're not using setPostState here, as it's not necessary in this case
  }

  // useEffect(() => {
  //   // Update the title of the first post with the received name
  //   if (title && postState.length > 0) {
  //     const updatedPosts = [...postState]
  //     updatedPosts[0].title = title
  //     setPostState(updatedPosts)
  //   }
  // }, [title])

  const post = postState.map(p => <Post id={p.id} title={p.title} author={p.author} key={p.id} onClick={() => handlePostClick(p.id)} />)

  return <div className="postCard">{post}</div>
}

export default Posts
