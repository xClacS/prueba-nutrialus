import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { User } from './components/User';

function App() {
  const url = 'https://0q27loouph.execute-api.us-east-1.amazonaws.com/';
  const [datos, setDatos] = useState({});
  // console.log(datos);
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setDatos(responseJSON);
  }
  useEffect(() => {
    fetchApi();
  }, [])

  const handleButtonClick = ()=> fetchApi();
    return (
    <div className="App">
      <div className=".row">
        <div className=".col">
          <User {...datos}/>
        <button onClick={handleButtonClick}>
            Change
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
