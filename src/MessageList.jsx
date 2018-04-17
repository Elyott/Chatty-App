import React, {Component} from 'react';
import Message from './Message.jsx';



function MessageList ({messages}) {
  const messageComponents = messages.map(message => (<Message key={message.content.slice(0, 10)} message={message}/>))
    return (
      <div id="message-list">
        {messageComponents}
      </div>
    );
}

export default MessageList;