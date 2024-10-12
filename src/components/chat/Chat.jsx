import EmojiPicker from "emoji-picker-react"
import "./chat.css"
import { useState } from "react"

const Chat = () => {
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')


  const handleText = (e) => {
    const text = e.target.value
    setText(text)
  }

  const handleEmoji = (e) => {
    setText((prev) => prev+e.emoji)
  }

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam perspiciatis nulla culpa, veniam quidem distinctio similique consequuntur id esse excepturi at, doloribus cum dolores? Officia molestiae aut aspernatur laudantium.</p>
            <span>1 min ago</span>
            
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam perspiciatis nulla culpa, veniam quidem distinctio similique consequuntur id esse excepturi at, doloribus cum dolores? Officia molestiae aut aspernatur laudantium.</p>
            <span>1 min ago</span>

          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam perspiciatis nulla culpa, veniam quidem distinctio similique consequuntur id esse excepturi at, doloribus cum dolores? Officia molestiae aut aspernatur laudantium.</p>
            <span>1 min ago</span>

          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam perspiciatis nulla culpa, veniam quidem distinctio similique consequuntur id esse excepturi at, doloribus cum dolores? Officia molestiae aut aspernatur laudantium.</p>
            <span>1 min ago</span>

          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam perspiciatis nulla culpa, veniam quidem distinctio similique consequuntur id esse excepturi at, doloribus cum dolores? Officia molestiae aut aspernatur laudantium.</p>
            <span>1 min ago</span>

          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" id="messageBox" value={text} placeholder="Type a message...." onChange={handleText}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
          </div>
        </div>
          <button className="sendButton">Send</button>
      </div>
    </div>
  )
}

export default Chat
