
import React, { Component } from 'react';

var count = 140;

class TweetBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      remainText: count
    }
  }

  handleText(text) {
    this.setState({
      text: text,
      remainText: count - text.length
    })
  }

  tweeted(text){
    if(text === "")
      return;

    this.props.onTweet(text);
    this.tweetbox.value = "";
    this.setState({
      text: "",
      remainText: count
    })
  }

  render() {
    return (
      <div className="ui form">
        <div className="field">
          <textarea type="text" className="tweet-box" ref={tb => this.tweetbox = tb}
            placeholder={this.props.prompt}
            onChange={e => this.handleText(e.target.value)}
          />
          <p>{this.state.remainText}</p>
          <button onClick={() => this.tweeted(this.state.text)}
            className="tweet-button"
            disabled={this.state.remainText < 0}>
            Tweet!
        </button>
        </div>
      </div>
    );
  }
}


export default TweetBox;
