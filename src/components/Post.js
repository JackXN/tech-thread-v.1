/* eslint-disable */
import { ExpandMoreOutlined, TodayTwoTone } from "@material-ui/icons";
import React from "react";
import "../Styles/Post.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src={profilePic} className="post-avatar" />
        <div className="post_topInfo">
          <h3>{username}</h3>
          <p>Timestamp</p>
        </div>
      </div>

      <div className="post_message">
        <p>{message}</p>
      </div>

      <div className="post_bottom post_image">
        <img src={image} alt="some image" />
      </div>

<div className='post_options'>
<div className='post_option'>
<ThumbUpIcon/>
    <p>Like</p>
</div>

<div className='post_option'>
    <ChatBubbleOutlineIcon/>
    <p>Comment</p>
    </div>

    <div className='post_option'>
        <NearMeIcon/>
        <p>Share</p>
    </div>

    <div className='post_option'>
      <AccountCircleIcon/>
    <ExpandMoreOutlined/>
    </div>
</div>
    </div>
  );
}

export default Post;
