import React, { useState } from "react"
import Posts from "../../components/post/Posts"
import PostDetails from "../../components/post/PostDetails"

const Dashboard = () => {
  const [inputValue, setinputValue] = useState("")
  const [title, setTitle] = useState("")
  const [selectedPost, setSelectedPost] = useState({})

  const handleNameChange = event => {
    // console.log(event.target.value)
    setinputValue(event.target.value)
  }

  const handleButtonSubmit = () => {
    setTitle(inputValue)
  }

  const handleSelectedPost = post => {
    setSelectedPost(post)
  }

  return (
    <>
      {/* <div>Dashboard</div> */}
      <Posts title={title} handleSelectedPost={handleSelectedPost} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" name="inputValue" value={inputValue} onChange={handleNameChange} style={{ width: "150px", marginBottom: "10px" }} />
        <button onClick={handleButtonSubmit} name="onSubmit" style={{ width: "100px" }}>
          Change Name
        </button>
      </div>
      <div className="postDetailsCard">
        <PostDetails title={selectedPost.title} author={selectedPost.author} id={selectedPost.id} description={"This is the content in the post..."} />
      </div>
    </>
  )
}

export default Dashboard
