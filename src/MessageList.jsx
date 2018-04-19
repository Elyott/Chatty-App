import React, {Component} from 'react';
import Message from './Message.jsx';


class MessageList extends Component {
  render(){
  //creates a component for each message
    const messageComponents = this.props.messages.map(message => (<Message key={message.id} message={message} /> ))
    return (
      <div id="message-list">
        {messageComponents}
      </div>
    );
  }
}

export default MessageList;