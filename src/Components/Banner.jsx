import React, { useEffect , useState } from 'react'
import './Banner.styles.css'
import axios from './../axios';
import requests from "./../Request";
function Banner() {

        const[movie, setMovie] = useState([]);

        useEffect(() => {
            async function fetchData(){
                const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length - 1)
                    ]
                );
                return requests;
            }
            fetchData();
        }, []);
        console.log(movie);

            // =====> function for see more in description <<=====
    // n is number of characters in description. string? is because there will be no description in the api for some movies and if there is lesser characters it will the string from : string
    
        function seeMore(string, n){
            return string?.length > n ? string.substr(0, n-1) + ' ....' : string;
        }

    return (
        <header
            className='banner'
            style={{
                backgroundSize : 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >
            <div className="banner_contents">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List</button>                   
                </div>
                <h1 className="banner_description">{seeMore(movie?.overview,130)} 
                </h1>
            </div>
            <div className="banner_fadeBottom"/>
        </header>
    )
}

export default Banner
