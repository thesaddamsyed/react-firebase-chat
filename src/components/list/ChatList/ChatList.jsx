import { useState } from "react"
import "./chatList.css"

const UserList = () => {
  const [addMode, setAddMode] = useState(false)
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="search" />
        </div>
        <img src={addMode ? "./minus.png" : './plus.png'} alt="" className="add"
        onClick={() => {setAddMode((prev) => !prev)}}
        />
      </div>
    </div>
  )
}

export default UserList
