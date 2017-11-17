import React, { Component } from 'react';
import moment from 'moment';
import Avatar from './avatar.jpg';

class Tweet extends Component {
    render() {
        let tweet = this.props.tweet;
        return (
            <div className="ui card">
                <div className="content">
                    <img src={Avatar} className="ui avatar image left floated" /> 
                    <b>React_Noob - </b>{moment(this.props.time).fromNow()}
                    <span style={{ cursor: 'pointer' }}>
                        <i className="right floated large trash icon"
                            onClick={() => this.props.handleDelete(tweet)} />
                    </span>
                    <div className="description left floated">
                        {tweet.text}
                    </div>
                </div>
                <div className="ui bottom attached button primary"
                    onClick={() => this.props.handleLike(tweet)}>
                    <i className="thumbs up icon"></i>
                    {tweet.liked ? 'Unlike !' : 'Like !'}
                </div>
            </div>
        )
    }
}

export default Tweet;
