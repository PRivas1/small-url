import Textbox from './Components/Textbox';
import Button from './Components/Button';
import { useState } from "react";
import './App.css';


function App() {

  //initialize the useState for url input
  const [url, setUrl] = useState("");

  const  shortenApi = async() => {
  
  //console.log("Click");

  const response = await fetch("/api/shorten", {
    method: "POST",
    body: url
  });
  

  //display original URL
  console.log(url);
  //display shortened URL
  console.log(window.location.origin + "/" + await response.text());
  
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
      <p itemID="Output-link">URL</p>
    </div>
    </>
  );
}



export default App;
