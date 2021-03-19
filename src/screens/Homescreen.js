import React from 'react'
import Banner from '../Banner'
import Navbar from '../Navbar'
import Row from '../Row'
import requests from '../requests'


function Homescreen() {
    return (
        <div className="homescreen">
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
    )
}

export default Homescreen
