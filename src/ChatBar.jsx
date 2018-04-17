import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(){
    super()

    this.state = {
      user: '',
      content: ''
    }

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
    if (event.key == "Enter"){
      this.props.onNewMessage(this.state);
      // this.setState({
      //   user: '',
      //   content: ''
      // });
    }

  }

  render() {
    return (
        <footer className="chatbar">
            <input className="chatbar-username" onInput={this.onUser} />
            <input className="chatbar-message" placeholder="Type a message and hit ENTER" onInput={this.onContent}
            onKeyUp={this.onPost}
            />
        </footer>
    );
  }
}

export default ChatBar;