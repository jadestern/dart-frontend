import React from 'react';
import { SearchBar, List, Copyright } from './components';

function App() {
  return (
    <div className="App px-6 py-8 max-w-md mx-auto">
      <SearchBar />
      <List />
      <Copyright />
    </div>
  );
}

export default App;
