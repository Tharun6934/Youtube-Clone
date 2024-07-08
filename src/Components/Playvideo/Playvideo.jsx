import "./Playvideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { useEffect, useState } from "react";
import { API_KEY } from "../../data";
import { calculatingviews } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

// function Playvideo({ videoId })

function Playvideo() {
  const { videoId } = useParams();
  const [apidata, setApidata] = useState(null);
  const [channeldata, setChanneldata] = useState(null);
  const [commentdata, setCommentdata] = useState([]);

  const fetchvideodata = async () => {
    try {
      const vediodetails_URLlink = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;

      const response = await fetch(vediodetails_URLlink);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // console.log(response);

      // console.log(vediodetails_URLlink);
      const data = await response
        .json()
        .then((value) => setApidata(value.items[0]));
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    fetchvideodata();
  }, [videoId]);

  // console.log(apidata);

  const fetchchanneldata = async () => {
    try {
      const channeldetails_URLlink = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;

      const response = await fetch(channeldetails_URLlink);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const channeldata = await response
        .json()
        .then((value) => setChanneldata(value.items[0]));
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  useEffect(() => {
    fetchchanneldata();
  }, [apidata]);

  const fetchcommentsdata = async () => {
    try {
      const commentdetails_URLlink = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;

      const response = await fetch(commentdetails_URLlink);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // console.log(response);
      const commentSdata = await response
        .json()
        .then((value) => setCommentdata(value.items));
    } catch (error) {
      console.error("Error fetching video data:", error);
    }
  };

  // console.log(commentdata);

  useEffect(() => {
    fetchcommentsdata();
  }, [apidata]);

  return (
    <div className="playvideocontainer">
      {/* <video src={video1} controls muted autoplay></video> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        // title="Now The Final Fury | Power Rangers Jungle Fury | Full Episode | E32 | Power Rangers Official"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apidata ? apidata.snippet.title : "Title here"}</h3>
      {/* <h3>{apidata.snippet.title}</h3> */}
      <div className="views">
        <div className="days">
          <p>
            {apidata ? calculatingviews(apidata.statistics.viewCount) : "233"}
            views &nbsp;&nbsp;
            {apidata
              ? moment(apidata.snippet.publishedAt).fromNow()
              : "day ago"}
          </p>
        </div>
        <div className="icons">
          <div className="size">
            <img src={like} />
            <span>
              {apidata ? calculatingviews(apidata.statistics.likeCount) : "233"}
            </span>
          </div>
          <div className="size">
            <img src={dislike} />
            <span></span>
          </div>
          <div className="size">
            <img src={share} />
            <span>Share</span>
          </div>
          <div className="size">
            <img src={save} />
            <span>Save</span>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <div className="subscribername">
          <img
            src={
              channeldata
                ? channeldata.snippet.thumbnails.default.url
                : "profile"
            }
            className="subscribedperson"
          />
          <div>
            <h4>{apidata ? apidata.snippet.channelTitle : "title"}</h4>
            <p>1M Subscribers</p>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="description">
          <p>
            {apidata
              ? apidata.snippet.description.slice(0, 250)
              : "description"}
          </p>
          <hr></hr>
          <span className="noofcomments">130 comments</span>
          {commentdata.map((item, index) => {
            return (
              <div className="secondpart" key={index}>
                <img
                  src={
                    item.snippet.topLevelComment.snippet.authorProfileImageUrl
                  }
                  alt=""
                />
                <div>
                  <div className="commentdetails">
                    <span className="commentedperson">
                      {item.snippet.topLevelComment.snippet.authorDisplayName}
                    </span>
                    <span className="daysbefore">1day ago</span>
                  </div>
                  <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                  <div>
                    <div className="dislikecomment">
                      <div className="commentlike">
                        <img src={like} />
                        <span>
                          {calculatingviews(
                            item.snippet.topLevelComment.snippet.likeCount
                          )}
                        </span>
                      </div>
                      <img src={dislike} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="secondpart">
            <img src={user_profile} alt="" />
            <div>
              <div className="commentdetails">
                <span className="commentedperson">Jack Nicholson </span>
                <span className="daysbefore">1day ago</span>
              </div>
              <p>
                A global computer network providing a variery of information and
                communicaton facilities,consisting of interconnected networks
                using standardized communication process
              </p>
              <div>
                <div className="dislikecomment">
                  <div className="commentlike">
                    <img src={like} />
                    <span>255</span>
                  </div>
                  <img src={dislike} />
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="secondpart">
            <img src={user_profile} alt="" />
            <div>
              <div className="commentdetails">
                <span className="commentedperson">Jack Nicholson </span>
                <span className="daysbefore">1day ago</span>
              </div>
              <p>
                A global computer network providing a variery of information and
                communicaton facilities,consisting of interconnected networks
                using standardized communication process
              </p>
              <div>
                <div className="dislikecomment">
                  <div className="commentlike">
                    <img src={like} />
                    <span>255</span>
                  </div>
                  <img src={dislike} />
                </div>
              </div>
            </div>
          </div>
          <div className="secondpart">
            <img src={user_profile} alt="" />
            <div>
              <div className="commentdetails">
                <span className="commentedperson">Jack Nicholson </span>
                <span className="daysbefore">1day ago</span>
              </div>
              <p>
                A global computer network providing a variery of information and
                communicaton facilities,consisting of interconnected networks
                using standardized communication process
              </p>
              <div>
                <div className="dislikecomment">
                  <div className="commentlike">
                    <img src={like} />
                    <span>255</span>
                  </div>
                  <img src={dislike} />
                </div>
              </div>
            </div>
          </div>
          <div className="secondpart">
            <img src={user_profile} alt="" />
            <div>
              <div className="commentdetails">
                <span className="commentedperson">Jack Nicholson </span>
                <span className="daysbefore">1day ago</span>
              </div>
              <p>
                A global computer network providing a variery of information and
                communicaton facilities,consisting of interconnected networks
                using standardized communication process
              </p>
              <div>
                <div className="dislikecomment">
                  <div className="commentlike">
                    <img src={like} />
                    <span>255</span>
                  </div>
                  <img src={dislike} />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Playvideo;
