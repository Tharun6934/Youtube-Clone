import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

function App() {
  const [isopen, setIsopen] = useState(true);

  return (
    <div>
      <Navbar setIsopen={setIsopen} isopen={isopen} />
      <Routes>
        <Route path="/" element={<Home isopen={isopen} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
