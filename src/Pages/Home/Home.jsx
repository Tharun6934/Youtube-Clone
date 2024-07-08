import "./Home.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Feed from "../../Components/Feed/Feed";
import { useState } from "react";

function Home({ isopen }) {
  const [category, setCategory] = useState(0);
  return (
    <div className="homecontainer">
      <Sidebar isopen={isopen} category={category} setCategory={setCategory} />
      <div className={`${isopen ? "container" : "largecontainer"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
}

export default Home;
