import axios from "axios"
import React, { useState, useRef } from "react"

const AddPost = props => {
  const { handler } = props
  const titleRef = useRef(null)
  const authorRef = useRef(null)
  const contentRef = useRef(null)

  const handleFormOnSubmit = async event => {
    event.preventDefault()

    try {
      const response = await axios.post("http://localhost:8080/api/v1/posts/user/1", {
        title: titleRef.current.value,
        author: authorRef.current.value,
        content: contentRef.current.value
      })

      const newPost = response.data
      console.log(newPost)

      // Clear input fields
      titleRef.current.value = ""
      authorRef.current.value = ""
      contentRef.current.value = ""

      handler()
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleFormOnSubmit}>
        <label>Title:</label>
        <input type="text" name="title" ref={titleRef} />
        <label>Author:</label>
        <input type="text" name="author" ref={authorRef} />
        <label>Content:</label>
        <input type="text" name="content" ref={contentRef} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddPost
