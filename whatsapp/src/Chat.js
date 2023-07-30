import React from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, Mic, MoreVert, SearchOutlined } from "@mui/icons-material"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
function Chat() {
  return (
    <div className='chat'>
      <div className="chatHeader">
        <Avatar />
        <div className="chatHeaderInfo">
            <h3>Room Name</h3>
            <p>Last seen at...</p>
        </div>

        <div className="chatHeaderRight">
            <IconButton>
                <SearchOutlined />
            </IconButton>
            <IconButton>
                <AttachFile />
            </IconButton>
            <IconButton>
                <MoreVert />
            </IconButton>
        </div>
      </div>

      <div className="chatBody">
        <p className="chatMessage">
          <span className="chatName">Kushagra</span>
          This is a message.
          <span className="chatTimeStamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chatMessage chatReceiver">
          <span className="chatName">Kushagra</span>
          This is a message.
          <span className="chatTimeStamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chatFooter">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
