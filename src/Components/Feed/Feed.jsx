import "./Feed.css";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import { useEffect, useState } from "react";
import { calculatingviews } from "../../data";
import moment from "moment";

function Feed({ category }) {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const videolist_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=us&videoCategoryId=${category}&key=${API_KEY} `;

      // console.log(recommenddetails_URLlink);

      // console.log(videolist_URL);
      const response = await fetch(videolist_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // console.log(response);

      const recommedsdata = await response
        .json()
        .then((value) => setData(value.items));
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  // console.log(data);

  return (
    <div className="feedcontainer1">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            style={{ textDecoration: "none" }}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
            <p>{item.snippet.title}</p>
            <h3>{item.snippet.channelTitle}</h3>
            <h4 className="views">
              {calculatingviews(item.statistics.viewCount)} Views &nbsp;
              {moment(item.snippet.publishedAt).fromNow()}
            </h4>
          </Link>
        );
      })}
    </div>
  );
}

export default Feed;

// const fetchData = async () => {
//   const videolist_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=us&videoCategoryId=${category}&key= ${API_KEY} `;

//   // await fetch(videolist_URL).then((response) => console.log(response));

//   await fetch(videolist_URL)
//     .then((response) => response.json())
//     .then((data) => setData(data.items));
// };
