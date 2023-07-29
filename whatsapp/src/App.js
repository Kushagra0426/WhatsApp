import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
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
