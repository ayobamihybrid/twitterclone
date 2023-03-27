import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';
import {
  ChatBubbleOutline,
  FavoriteBorder,
  Publish,
  Repeat,
  Verified,
  VerifiedUser,
  VerifiedUserOutlined,
} from '@mui/icons-material';
function Post() {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://pbs.twimg.com/media/Fr_ZqKfXoAMGqsV?format=jpg&name=small" />
      </div>
      <div className="post__body">
        <h3>
          Breezy Daniels
          <span className='post__headerSpecial'>
            <VerifiedUser className="post__badge" />
            @breezy2023
          </span>
        </h3>
        <p>Welcome to a new dispensation</p>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
        />

        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;

{
  /* <div className="post__body">
<div className="post__header">
  <div className="post__headerText">
    <h3>
      Breezy Davies
      <span>
        <VerifiedUser className="post__badge" /> @breezy2023
      </span>
    </h3>
  </div>
  <div className="post__headerDescription">
    <p>Welcome to a new dispensation</p>
  </div>
</div>
<img
  src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
  alt=""
/>
</div> */
}
