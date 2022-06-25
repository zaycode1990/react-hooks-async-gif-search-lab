import React from "react";
import GifListContainer from "./GifListContainer"
import NavBar from "./NavBar";

// the App component should render out the GifListContainer component

function App() {

  const navBarStyling = {
    display: "inline-block",
    listStyleType: "none"
  }
  return (
    <div>
      <NavBar color="black"  title="Giphy Search"/>
      <GifListContainer/>
    </div>
  );
}

export default App;
