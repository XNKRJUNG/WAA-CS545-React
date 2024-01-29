import React, { useState } from "react"
import Posts from "../../components/post/Posts"

const Dashboard = () => {
  const [inputValue, setinputValue] = useState("")
  const [title, setTitle] = useState("")

  const handleNameChange = event => {
    // console.log(event.target.value)
    setinputValue(event.target.value)
  }

  function handleButtonSubmit() {
    setTitle(inputValue)
  }

  return (
    <>
      <div>Dashboard</div>
      <Posts title={title} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" name="inputValue" value={inputValue} onChange={handleNameChange} style={{ width: "150px", marginBottom: "10px" }} />
        <button onClick={handleButtonSubmit} name="onSubmit" style={{ width: "100px" }}>
          Change Name
        </button>
      </div>
    </>
  )
}

export default Dashboard
