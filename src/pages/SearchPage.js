import React from "react";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import Response from "../response";
import Search from "../components/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import YouTubeIcon from "@material-ui/icons/YouTube";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";


const SearchPage = () => {
  const [{ term }, dispatch] = useStateValue();
  const { data } = useGoogleSearch(term) //<<< live API call

    // const data = Response; //  <<< mock API call
  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Logo_2013_Google.png/799px-Logo_2013_Google.png"
            alt="logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          {/* 搜尋框 */}
          <Search hideButtons />
          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                {/* 搜尋 icon*/}
                <SearchIcon />
                <Link to="/all">全部</Link>
              </div>
              <div className="searchPage__option">
                {/* 圖片 icon*/}
                <ImageIcon />
                <Link to="/images">圖片</Link>
              </div>
              <div className="searchPage__option">
                {/* 新聞 icon*/}
                <DescriptionIcon />
                <Link to="/news">新聞</Link>
              </div>
              <div className="searchPage__option">
                {/* 影片 icon*/}
                <YouTubeIcon />
                <Link to="/videos">影片</Link>
              </div>
              <div className="searchPage__option">
                {/* 地圖 icon*/}
                <RoomIcon />
                <Link to="/maps">地圖</Link>
              </div>
              <div className="searchPage__option">
                {/* 更多 icon*/}
                <MoreVertIcon />
                <Link to="/more">更多</Link>
              </div>
            </div>
            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                {/* 設定 */}
                <Link to="/settings">設定</Link>
              </div>
              <div className="searchPage__option">
                {/* 工具 */}
                <Link to="/tools">工具</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage__results">
          <p className="searchPage__results__count">
            約有 {data?.searchInformation.formattedTotalResults} 項結果
            （搜尋時間：{data?.searchInformation.formattedSearchTime}秒）
          </p>
          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a href={item.link}>
                {
                item?.pagemap?.cse_image?.length > 0 &&
                item.pagemap?.cse_image[0]?.src && (
                    <img
                    className="searchPage__result__images"
                    src={ item?.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src}
                    alt=""/>
                )}   
                {item.displayLink}
              </a>
              <a className="searchPage__resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
