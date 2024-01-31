import React, { useState } from "react"
import Posts from "../../components/post/Posts"
import PostDetails from "../../components/post/PostDetails"

const Dashboard = () => {
  const [inputValue, setinputValue] = useState("")
  const [title, setTitle] = useState("")
  const [selectedPostId, setSelectedPostId] = useState("")
  const [fetchPostsFn, setFetchPostsFn] = useState(null)

  const handleNameChange = event => {
    setinputValue(event.target.value)
  }

  const handleButtonSubmit = () => {
    setTitle(inputValue)
  }

  const handleSelectedPost = postId => {
    setSelectedPostId(postId)
  }

  return (
    <>
      <Posts title={title} handleSelectedPost={handleSelectedPost} setter={setFetchPostsFn} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" name="inputValue" value={inputValue} onChange={handleNameChange} style={{ width: "150px", marginBottom: "10px" }} />
        <button onClick={handleButtonSubmit} name="onSubmit" style={{ width: "100px" }}>
          Change Name
        </button>
      </div>
      <div className="postDetailsCard">
        <PostDetails id={selectedPostId} description={"This is the content in the post..."} handler={fetchPostsFn} />
      </div>
    </>
  )
}

export default Dashboard
