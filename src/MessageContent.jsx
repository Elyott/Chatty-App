import React, {Component} from 'react';


class MessageContent extends Component {

  constructor(){
    super();

    this.state = {
      content: '',
      images: []
    }

    this.onSeperateMessage = this.onSeperateMessage.bind(this);
  }

  componentDidMount() {
    //after page loads checks if message contains image
    const seperatedMessage = this.onSeperateMessage();
    //sets state with seperated message
    this.setState({
      content: seperatedMessage.content,
      images: seperatedMessage.images
    });

  }


  //checks for image urls in message then extracts them,
  //then puts message back together without image url returns both seperately in object
  onSeperateMessage(){
    //splits message into an array
    const inContent = (this.props.content).split(' ');
    let messageWithoutImage = [];
    let outContent = {
      content: '',
      images: []
    }
    //checks each string in array if they end with jpg, png, or gif
    inContent.forEach((item) => {
      if((item.endsWith('jpg')) || (item.endsWith('png')) || (item.endsWith('gif'))){
        outContent.images.push(item);
      } else {
        messageWithoutImage.push(item);
      }
    });
    //joins message back together without images
    outContent.content = messageWithoutImage.join(' ');
    return outContent;
  }


  render() {
      //creates a img component for each image below the message
      const imageComponents = this.state.images.map((image, index) =>
        (<img key={index} className="message-image" style={{borderColor: this.props.userColor}} src={image}/>))
      return (
        <span className="message-content">
          {this.state.content}
          <br/>
          {imageComponents}
        </span>
    )
  }
}

export default MessageContent;