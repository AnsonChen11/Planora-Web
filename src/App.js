// app.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_URL;

    fetch(`${apiUrl}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log(data);
        setMessage(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Planora Web!</h1>
        <p>This is a simple React app running in Docker.</p>
        <p>{message}</p> {}
      </header>
    </div>
  );
}

export default App;
