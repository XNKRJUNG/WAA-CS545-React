import React, { useEffect, useState, useContext } from "react"
import Post from "./Post"
import axios from "axios"
import PostContext from "../context/PostContext"

import "./css/post.css"

const Posts = props => {
  const { selectedPostId, setSelectedPostId } = useContext(PostContext)
  const [postState, setPostState] = useState([])

  const { setter } = props

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
    setSelectedPostId(post)
    setter(() => fetchPosts)
  }

  if (props.title && postState.length > 0) {
    const updatedPosts = [...postState]
    updatedPosts[0].title = props.title
    // Note: We're not using setPostState here, as it's not necessary in this case
  }

  const post = postState.map(p => <Post id={p.id} title={p.title} author={p.author} key={p.id} onClick={() => handlePostClick(p.id)} />)

  return <div className="postCard">{post}</div>
}

export default Posts
