import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TweetBox from './tweetbox';
import Tweet from './Tweet';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    }
  }

  handleTweets(tweet) {
    let tweetObj = {
      text: tweet,
      liked: false,
    };
    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    })
  }

  handleLike(tweet) {
    let tweets = this.state.tweets.map((t) => {
      if (t.text === tweet.text) {
        return {
          text: t.text,
          liked: !t.liked
        }
      }
      return t;
    });

    this.setState({
      tweets
    })
  }

  handleDelete(tweet) {
    let newTweets = this.state.tweets.filter(q => q.text !== tweet.text);

    this.setState({
      tweets: newTweets
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React is Awesome !</h1>
        </header>
        <div>
          <TweetBox prompt="What are you thinking ?" onTweet={this.handleTweets.bind(this)} />
        </div>
        <div className="ui container left aligned">
          <div className="ui two cards">
            {this.state.tweets.map((q) =>
              <Tweet tweet={q} time={new Date()}
                handleLike={this.handleLike.bind(this)}
                handleDelete={this.handleDelete.bind(this)} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
