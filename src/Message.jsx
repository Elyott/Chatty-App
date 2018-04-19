import React, {Component} from 'react';
import MessageContent from './MessageContent.jsx';

class Message extends Component {

  render() {
    return (
      //checks message type
      (this.props.message.type === "incomingMessage") ?
        (<div className="message">
          <span className="message-username" style={{color: this.props.message.userColor}} >{this.props.message.username}</span>
          <MessageContent content={this.props.message.content} userColor={this.props.message.userColor} />
        </div>
    ) : (
      <div className="message system">
        {this.props.message.content}
      </div>)
    )
  }
}

export default Message;