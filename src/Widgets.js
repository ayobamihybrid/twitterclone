import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import { Search } from '@mui/icons-material';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={'1637072837369380865'} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ayobamiworld"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={'https://facebook.com/cleverprogrammer'}
          options={{ text: '#reactjs', via: 'cleverqazi' }}
        />
      </div>
    </div>
  );
}

export default Widgets;
