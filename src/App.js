import './App.css';
import {ChatEngine} from 'react-chat-engine';
import LoginForm from './Components/LoginForm'
import ChatFeed from './Components/ChatFeed.js';

function App() {
  if (!localStorage.getItem('username')) return <LoginForm />;
  
  return (
    <div className="App">
      <ChatEngine
      height="100vh"
      projectID="7643d760-307b-49ee-a9e1-f8bf9793e4d2"
      userName="tomburnside"
      userSecret="qwerty" 
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
      </div>
  );
}

export default App;
