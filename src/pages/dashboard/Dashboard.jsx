import React, { useState } from "react"
import Posts from "../../components/post/Posts"
import PostDetails from "../../components/post/PostDetails"
import AddPost from "../../components/post/AddPost"
import PostContext from "../../components/context/PostContext"

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

  return (
    <PostContext.Provider value={{ selectedPostId, setSelectedPostId }}>
      <>
        <Posts title={title} setter={setFetchPostsFn} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input type="text" name="inputValue" value={inputValue} onChange={handleNameChange} style={{ width: "150px", marginBottom: "10px" }} />
          <button onClick={handleButtonSubmit} name="onSubmit" style={{ width: "100px" }}>
            Change Name
          </button>
        </div>
        <div className="postDetailsCard">
          <PostDetails id={selectedPostId} description={"This is the content in the post..."} handler={fetchPostsFn} />
        </div>
        <div className="addPostCard">
          <AddPost handler={fetchPostsFn} />
        </div>
      </>
    </PostContext.Provider>
  )
}

export default Dashboard
