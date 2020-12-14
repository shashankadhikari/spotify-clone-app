import React from 'react';
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />

     
      
    </div>
  )
}

export default Body
