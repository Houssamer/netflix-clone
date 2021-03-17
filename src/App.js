import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './Navbar'
import Banner from './Banner'
import Row from '../../netflix-clone-nv/src/Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isRowLarge/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
