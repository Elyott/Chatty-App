import React, {Component} from 'react';


class Message extends Component {

  render() {
    return (
      (this.props.message.type === "incomingMessage") ?
        (<div className="message">
          <span className="message-username" style={{color: this.props.message.userColor}} >{this.props.message.username}</span>
          <span className="message-content">{this.props.message.content}</span>
        </div>
    ) : (
      <div className="message system">
        {this.props.message.content}
      </div>)
    )
  }
}

export default Message;