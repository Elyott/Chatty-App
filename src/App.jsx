import React, {Component} from 'react';
import ChatBar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './Navbar.jsx'


class App extends Component {

  constructor(){
    super();
    this.state = {
      currentUser: 'Anonymous',
      usersOnline: 0,
      messages: []
    }

    this.onNewMessage = this.onNewMessage.bind(this);
    this.onNewUser = this.onNewUser.bind(this);
  }

  componentDidMount() {
    //creates then connects to websocket once page is loaded
    this.socket = new WebSocket('ws://localhost:3001');
    this.socket.addEventListener('open', function (event) {
      console.log('Connected to server');
    });
    //listens for incoming messages then sorts them
    this.socket.addEventListener('message', event => {
      const incomingMessage = JSON.parse(event.data);
      switch(incomingMessage.type){
        case 'onlineUserCount':
          this.setState({usersOnline: incomingMessage.userCount});
          break;
        default:
          this.setState({messages: this.state.messages.concat(incomingMessage)});
      }
    });
  }

  //sends notification to websocket when a username is changed
  onNewUser(newUsername){
    const notificationContent = (`${this.state.currentUser} has changed their name to ${newUsername}`);
    const newUserNotification = {type: 'postNotification', content: notificationContent};
    this.socket.send(JSON.stringify(newUserNotification));
    this.setState({currentUser: newUsername});
  }

  //sends message to websocket when user enters message
  onNewMessage(content){
    const newMessage = {type: 'postMessage', username: this.state.currentUser, content,};
    this.socket.send(JSON.stringify(newMessage));
  }

  render() {
    return (
      <div>
        <Navbar usersOnline={this.state.usersOnline} />
        <MessageList messages={this.state.messages} />
        <ChatBar onNewMessage={this.onNewMessage} onNewUser={this.onNewUser} />
      </div>
    );
  }
}
export default App;
