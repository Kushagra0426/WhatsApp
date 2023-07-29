import React from 'react'
import "./SidebarChats.css";
import { Avatar } from '@mui/material';
function SidebarChat() {
  return (
    <div className="SidebarChats">
      <Avatar />
      <div className="sidebarChatInfo">
        <h2>Room Name</h2>
        <p>This is the last message.</p>
      </div>
    </div>
  )
}

export default SidebarChat
