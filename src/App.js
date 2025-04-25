import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to API Explorer</h1>
        <p className="App-description">
          Discover meals, music, and stunning images using TheMealDB, Deezer, and Unsplash APIs.
        </p>
      </header>
      <main className="App-main">
        <section className="App-section">
          <h2>Meals</h2>
          <p>Explore delicious recipes from TheMealDB.</p>
          <button className="App-button">Fetch Meals</button>
        </section>
        <section className="App-section">
          <h2>Music</h2>
          <p>Find your favorite tracks using Deezer API.</p>
          <button className="App-button">Fetch Music</button>
        </section>
        <section className="App-section">
          <h2>Images</h2>
          <p>Discover beautiful photos from Unsplash.</p>
          <button className="App-button">Fetch Images</button>
        </section>
      </main>
      <footer className="App-footer">
        <p>Powered by TheMealDB, Deezer, and Unsplash APIs</p>
      </footer>
    </div>
  );
}

export default App;
