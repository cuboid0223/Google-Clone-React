import React, { useState } from "react";
import MicIcon from "@material-ui/icons/Mic";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

const Search = ({ hideButtons = false }) => {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    console.log("click enter!!");
    history.push("./search"); //when click enter, then go to searchPage
    dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input //把搜尋的字串放進資料庫（contextAPI）
    })
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__searchIcon" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <MicIcon className="search__micIcon" />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google 搜尋
          </Button>
          <Button variant="outlined">好手氣</Button>
        </div>
      ) : (
        <div className="search__buttons search__buttonsHidden">
          <Button type="submit" variant="outlined" onClick={search}>
            Google 搜尋
          </Button>
          <Button variant="outlined">好手氣</Button>
        </div>
      )}
    </form>
  );
};

export default Search;
