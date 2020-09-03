import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__header__left">
          <Link to="about">關於 Google</Link>
          <Link to="store">Google 商店</Link>
        </div>
        <div className="home__header__right">
          <Link to="gmail">Gmail</Link>
          <Link to="images">圖片</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          className="googleLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_2013_Google.png/799px-Logo_2013_Google.png"
          alt="google logo"
        />
        <div className="home_input">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
