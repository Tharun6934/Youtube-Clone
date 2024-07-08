import "./Recommended.css";

import { calculatingviews } from "../../data";
import { useState } from "react";
import { API_KEY } from "../../data";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Recommended({ categoryId }) {
  const [recommend, setRecommend] = useState([]);

  const fetchrecommenddata = async () => {
    try {
      const recommenddetails_URLlink = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;

      const response = await fetch(recommenddetails_URLlink);
      // console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const channeldata = await response
        .json()
        .then((value) => setRecommend(value.items));
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    fetchrecommenddata();
  }, []);

  console.log(recommend);

  return (
    <div className="recommendedsection">
      {recommend.map((item, index) => {
        return (
          <Link
            to={`/video/${item.snippet.categoryId}/${item.id}`}
            className="recommed-video"
            style={{ textDecoration: "none" }}
          >
            <img src={item.snippet.thumbnails.medium.url} />
            <div>
              <p className="video-des">{item.snippet.title}</p>
              <p className="recommendtitle">{item.snippet.channelTitle}</p>
              <p className="recommendedviews">
                {calculatingviews(item.statistics.viewCount)} Views
              </p>
            </div>
          </Link>
        );
      })}
      {/* <div className="recommed-video">
        <img src={thumbnail1} />
        <div>
          <p className="video-des">
            Best channel that help you to be a web developer
          </p>
          <p>GreatStack</p>
          <p>1995 Views</p>
        </div>
      </div> */}
    </div>
  );
}

export default Recommended;
