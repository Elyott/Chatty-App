import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(){
    super()

    this.state = {
      user: '',
      content: ''
    }

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onUser = this.onUser.bind(this);
    this.onContent = this.onContent.bind(this);
    this.onPost = this.onPost.bind(this);
  }

  onUser (event) {
    this.setState({
      user: event.target.value
    });
  }

  onContent (event) {
    this.setState({
      content: event.target.value
    });
  }

  onPost(event){
    if (event.key === "Enter"){
      this.props.onNewMessage(this.state.content);
      event.target.value = "";
    }
  }

  onChangeUsername(event){
    if (event.key === "Enter"){
      this.props.onNewUser(this.state.user);
    }
  }

  render() {
    return (
        <footer className="chatbar">
            <input id="usernameInput" className="chatbar-username" placeholder="Username..." onInput={this.onUser}
            onKeyPress={this.onChangeUsername} />
            <input id="messageInput" className="chatbar-message" placeholder="Type a message and hit ENTER" onInput={this.onContent}
            onKeyPress={this.onPost}
            />
        </footer>
    );
  }
}

export default ChatBar;