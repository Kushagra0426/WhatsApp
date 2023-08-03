import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data);
      });
  } ,[]);

  useEffect(() => {
    const pusher = new Pusher('7bf400cc1fd27550a6db', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      alert(JSON.stringify(newMessages));
      setMessages([...messages, newMessages])
    });
  }, [messages]);

  console.log(messages);
  
  return (
    <div className="app">
      <div className="appBody">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
