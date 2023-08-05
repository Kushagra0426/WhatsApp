import React, { useState } from 'react'
import "./Chat.css";
import { Avatar, IconButton } from '@mui/material';
import { AttachFile, Mic, MoreVert, SearchOutlined } from "@mui/icons-material"
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import axios from "./axios";

function Chat({messages}) {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    await axios.post('/messages/new',{
      message: input,
      name: "DEMO APP",
      timeStamp: "Just now!",
      received: false
    });

    setInput("");
  };
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
        {messages.map((message) => (
          <p className={`chatMessage ${message.received === false && "chatReceiver"}`}>
            <span className="chatName">{message.name}</span>
            {message.message}
            <span className="chatTimeStamp">{message.timeStamp}</span>
          </p>
        ))}
      </div>

      <div className="chatFooter">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <IconButton>
          <Mic />
        </IconButton>
      </div>
    </div>
  )
}

export default Chat
