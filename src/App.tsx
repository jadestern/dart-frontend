import React, { useEffect } from 'react';
import Axios from 'axios';

function App() {
  const load = async () => {
    const { data } = await Axios.get('/.netlify/functions/hello');
    console.log(data);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Edit and save to reload.</p>
        <p>무궁화 꽃이 피었습니다.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
