/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import "../Styles/Header.css";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {useStateValue} from '../StateProvider'




function Header() {
const [{user}, dispatch] = useStateValue();

  return (
    <div className="header">
      {/* Header left */}
      <div className="header_left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
          alt="facebook-logo" height='40px'
        />
        <div className="header_input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      {/* Header Middle */}
      <div className="header_middle">
        <div className="header_option header_option--active">
          <HomeIcon font-size="large" />
        </div>
        <div className="header_option">
          <FlagIcon font-size="large" />
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon font-size="large" />
        </div>
        <div className="header_option">
          <StorefrontIcon font-size="large" />
        </div>
      </div>

      {/* Header right */}
      <div className="header_right">
        <div className="header_info">
          <Avatar src={user.photoUrl} />
          <h4>{user.displayName}</h4>
        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
