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

  //changes value of username input field when a user types
  onUser (event) {
    this.setState({
      user: event.target.value
    });
  }

  //changes value of content input field when a user types
  onContent (event) {
    this.setState({
      content: event.target.value
    });
  }

  //when user hits enter in content input field a new message is created
  onPost(event){
    if (event.key === 'Enter'){
      this.props.onNewMessage(this.state.content);
      event.target.value = '';
      this.setState({content: ''})
    }
  }

  //when user hits enter in username input field a new notification is created
  onChangeUsername(event){
    if (event.key === 'Enter'){
      this.props.onNewUser(this.state.user);
    }
  }

  render() {
    return (
        <footer className='chatbar'>
            <input id='usernameInput' className='chatbar-username' placeholder='Username...' onInput={this.onUser}
            onKeyPress={this.onChangeUsername} />
            <input id='messageInput' className='chatbar-message' placeholder='Type a message and hit ENTER' onInput={this.onContent}
            onKeyPress={this.onPost}
            />
        </footer>
    );
  }
}

export default ChatBar;