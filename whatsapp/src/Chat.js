import React from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material"
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
    </div>
  )
}

export default Chat
