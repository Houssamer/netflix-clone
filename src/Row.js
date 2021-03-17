import React, {useState, useEffect} from 'react';
import './Row.css';
import axios from './axios';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({title, fetchUrl, isRowLarge}) {

    const [movies, setMovies] = useState([]);
    const baseUrl= "https://image.tmdb.org/t/p/original";
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        async function fetchData(fetchUrl) {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
        }
        fetchData(fetchUrl);
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    function handleClick(movie) {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.originale_title)
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            }).catch((error) => console.log(error.message));
        }
    }

    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>
            <div className="row__posters">
                {
                    movies.map(movie => (
                        <img 
                            src={isRowLarge ? `${baseUrl}${movie.poster_path}` : `${baseUrl}${movie.backdrop_path}`} 
                            alt={movie.title} 
                            className="row__poster" 
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                        />
                    ))
                }
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
