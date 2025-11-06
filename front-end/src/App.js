import Textbox from './Components/Textbox';
import Button from './Components/Button';
import { useState } from "react";
import './App.css';


function App() {

  //initialize the useState for url input
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortendedUrl] = useState("");

  const  shortenApi = async() => {
  
  //console.log("Click");

  const response = await fetch("/api/shorten", {
    method: "POST",
    body: url
  });
  

  //display original URL
  console.log(url);
  //display shortened URL
  setShortendedUrl(window.location.origin + "/api/" + await response.text());
  console.log(shortenedUrl);
  
  }

  return (
    <>
    <div className="Title-container">
      <h1>Small URL Generator</h1>
    </div>
    <div className="Input-container">
      <Textbox 
      value={url}
      onTextChange={setUrl}
      />
      <Button  text="Create" onClick={shortenApi}/>
    </div>
    <div className="Output-container">
      <a href={shortenedUrl} rel="noopener noreferrer" target="_blank">{shortenedUrl}</a>
    </div>
    </>
  );
}



export default App;
