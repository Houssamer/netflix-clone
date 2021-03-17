import React, {useState, useEffect} from 'react'
import './Banner.css'
import axios from './axios'

function Banner({fetchUrl}) {

    const [movie, setMovie] = useState([]);
    const baseUrl= "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        async function fetchData(fetchUrl) {
            const response = await axios.get(fetchUrl);
            const movieIndex = Math.floor(Math.random() * response.data.results.length - 1);
            setMovie(response.data.results[movieIndex]);
        };

        fetchData(fetchUrl);
    }, [fetchUrl])

    function truncate(str, n) {
        return str?.length >n ? str.substr(0, n-1) + "..." : str;
    }

    const backgroundStyle={
        backgroundImage: `url(${baseUrl}${movie.backdrop_path})`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    }

    return (
        <header className="banner" style={backgroundStyle}>
            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.orginale_title || movie?.name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My Liste</button>
                </div>
                <div className="banner__description">
                    <p className="banner__description__content">{truncate(movie.overview, 150)}</p>
                </div>
            </div>
            <div className="banner__shadow" />
        </header>
    )
}

export default Banner
