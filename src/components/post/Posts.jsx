import React from "react"
import Post from "./Post"
import { useState } from "react"

import "./post.css"

const Posts = props => {
  const [postState, setPostState] = useState([
    { id: 1, title: "Happiness", author: "John" },
    { id: 2, title: "MIU", author: "Dean" },
    { id: 3, title: "Enjoy Life", author: "Jasmine" }
  ])

  const { title } = props

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

  const post = postState.map(p => <Post id={p.id} title={p.title} author={p.author} key={p.id} />)

  return <div className="postCard">{post}</div>
}

export default Posts
