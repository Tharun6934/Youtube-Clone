import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import "./Sidebar.css";

function Sidebar({ isopen, category, setCategory }) {
  return (
    <div className="fixsticky">
      <div className={`${isopen ? "sidebarcontainer" : "minsidebar"} center`}>
        <div className="side">
          <div className="sidebar1">
            <img
              src={home}
              className={`${category === 0 ? "active" : ""}`}
              onClick={() => setCategory(0)}
            />
            <p>Home</p>
          </div>
          <div className="sidebar1">
            <img
              src={game_icon}
              onClick={() => setCategory(20)}
              className={`${category === 20 ? "active" : ""}`}
            />
            <p>Gaming</p>
          </div>
          <div className="sidebar1">
            <img
              src={automobiles}
              onClick={() => setCategory(2)}
              className={`${category === 2 ? "active" : ""}`}
            />
            <p>Automobiles</p>
          </div>
          <div className="sidebar1">
            <img
              src={sports}
              onClick={() => setCategory(17)}
              className={`${category === 17 ? "active" : ""}`}
            />
            <p>Sports</p>
          </div>
          <div className="sidebar1">
            <img
              src={entertainment}
              onClick={() => setCategory(24)}
              className={`${category === 24 ? "active" : ""}`}
            />
            <p>Entertainment</p>
          </div>

          <div className="sidebar1">
            <img
              src={tech}
              onClick={() => setCategory(28)}
              className={`${category === 28 ? "active" : ""}`}
            />
            <p>Technology</p>
          </div>
          <div className="sidebar1">
            <img
              src={music}
              onClick={() => setCategory(10)}
              className={`${category === 10 ? "active" : ""}`}
            />
            <p>Music</p>
          </div>
          <div className="sidebar1">
            <img
              src={blogs}
              onClick={() => setCategory(22)}
              className={`${category === 22 ? "active" : ""}`}
            />
            <p>Blogs</p>
          </div>
          <div className="sidebar1">
            <img
              src={news}
              onClick={() => setCategory(25)}
              className={`${category === 25 ? "active" : ""}`}
            />
            <p>News</p>
          </div>
        </div>
        <hr className="hr"></hr>
        <p className="subscribe">Subscribed</p>
        <div>
          <div className="sidebar2">
            <img src={jack} />
            <p>PewDiePie</p>
          </div>
          <div className="sidebar2">
            <img src={simon} />
            <p>MrBeast</p>
          </div>
          <div className="sidebar2">
            <img src={megan} />
            <p>Justin Bieber</p>
          </div>
          <div className="sidebar2">
            <img src={tom} />
            <p>Holy</p>
          </div>
          <div className="sidebar2">
            <img src={cameron} />
            <p>Nas Daily</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
