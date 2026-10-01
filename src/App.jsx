import React from 'react';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import Article from './components/Article/Article';
import './App.css';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Welcome />
      <Article />
    </div>
  );
};

export default App;