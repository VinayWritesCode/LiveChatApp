import React from 'react';
import SideBar from "./jsFiles/SideBar";
import "./resources/stylesheets/Content.css";


function App() {
  return (
    <>
      <SideBar />
      <div className="camera1">
        <iframe src="https://cb75ab53af1b.ngrok.io" height="0" width="0" title="Camera"></iframe>
      </div>
    </>
  )
}

export default App;
