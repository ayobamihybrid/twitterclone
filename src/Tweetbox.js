import { Avatar } from '@mui/material';
import React from 'react';
import './Tweetbox.css';

function Tweetbox() {
  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox__input">
          <Avatar src="https://pbs.twimg.com/media/Fr_ZqKfXoAMGqsV?format=jpg&name=small" />
          <input placeholder="What's happening?" type="text" />
        </div>
      </form>
      <button className="tweetbox__btn">Tweet</button>
    </div>
  );
}

export default Tweetbox;
