import Textbox from './Components/Textbox';
import Button from './Components/Button';
import Link from './Components/Link'
import { useState } from "react";
import './App.css';


function App() {


  //initialize the useState for url input
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortendedUrl] = useState([]);
  

  const  shortenApi = async() => {

  
  //console.log("Click");

  const response = await fetch("/api/shorten", {
    method: "POST",
    body: url,
    headers: {"key": "shortURL"}
  });
  

  //display original URL
  console.log(url);
  //display shortened URL
  const shortUrl = window.location.origin + "/api/" + await response.text();
  const newLink = {
    short: shortUrl,
    long: url
  }
  if(response.status == 201){
    setShortendedUrl(array => [newLink, ...array]);
    console.log(shortenedUrl);
  }
  
  }

  return (
    <>
    <div className="background">
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
      {shortenedUrl.map((item, index) => (
        <Link 
          key={index} 
          short={item.short} 
          long={item.long}
        />
      ))}
    </div>
    </div>
    </>
  );
}






export default App;


