import axios from "axios"
import React, { useState } from "react"

const AddPost = props => {
  const { handler } = props
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")

  const handleFormOnSubmit = async event => {
    event.preventDefault()

    try {
      const response = await axios.post("http://localhost:8080/api/v1/posts/user/1", {
        title,
        author,
        content
      })
      const newPost = response.data
      console.log(newPost)
      setTitle("")
      setAuthor("")
      setContent("")
      handler()
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleTitleOnChange = event => {
    setTitle(event.target.value)
  }

  const handleAuthorOnChange = event => {
    setAuthor(event.target.value)
  }

  const handleContentOnChange = event => {
    setContent(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleFormOnSubmit}>
        <label>Title:</label>
        <input type="text" name="title" value={title} onChange={handleTitleOnChange} />
        <label>Author:</label>
        <input type="text" name="author" value={author} onChange={handleAuthorOnChange} />
        <label>Content:</label>
        <input type="text" name="content" value={content} onChange={handleContentOnChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddPost
