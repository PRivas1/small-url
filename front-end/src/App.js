import Textbox from './Components/Textbox';
import Button from './Components/Button';
import './App.css';

function App() {
  return (
    <>
    <div className="Title-container">
      <h1>Small URL Generator</h1>
    </div><div className="Input-container">
        <Textbox />
        <Button />
      </div>
    </>
  );
}

export default App;
