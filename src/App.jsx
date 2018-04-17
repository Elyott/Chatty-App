import React, {Component} from 'react';
import ChatBar from './Chatbar.jsx';
import MessageList from './MessageList.jsx';

import messages from '../data.json';



class App extends Component {
  constructor(){
    super();
    this.state = {
      messages: messages
    }

    this.onNewMessage = this.onNewMessage.bind(this);
  }

  // componentDidMount() {
  //   console.log("componentDidMount <App />");
  //   setTimeout(() => {
  //     console.log("Simulating incoming message");
  //     const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
  //     const messages = this.state.messages.concat(newMessage);
  //     this.setState({messages: messages})
  //   }, 3000);
  // }



    onNewMessage({user, content}){
      console.log("User: ", user, " Message: ", content);
      const newMessage = {username: user, content: content};
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages})
    }


  render() {
    return (
      <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar onNewMessage={this.onNewMessage} />
      </div>
    );
  }
}
export default App;
