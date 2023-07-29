import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Avatar, IconButton } from '@mui/material';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarHeader">
            <Avatar src='https://media.licdn.com/dms/image/D4D03AQGhlbcspqGEzw/profile-displayphoto-shrink_800_800/0/1688143570519?e=2147483647&v=beta&t=eT9tkGZdAotPtd7AfqyBPYioJf2esIier63WkuhyXoI' />
            <div className="sidebarHeaderRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>

        <div className="sidebarSearch">
            <div className="sidebarSearchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type="text" />
            </div>
        </div>

        <div className="sidebarChats">
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
            <SidebarChat />
        </div>
    </div>
  )
}

export default Sidebar
