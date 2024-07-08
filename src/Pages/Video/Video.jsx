import "./Video.css";
import Playvideo from "../../Components/Playvideo/Playvideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";

function Video() {
  const { videoId, categoryId } = useParams();
  // console.log(videoId);
  return (
    <div className="videopage">
      <Playvideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  );
}

export default Video;
