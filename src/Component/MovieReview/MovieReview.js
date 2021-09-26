import React, { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import WatchMoviesCart from '../WatchMoviesCart/WatchMoviesCart';

const MovieReview = () => {
    const [movies, SetMovies] = useState([]);
    const [watchMoviesCart, setWatchMoviesCart] = useState([]);
    const handleAddWatchMoviesCart = (movie) => {
        const newMoviesCart = [...watchMoviesCart, movie];
        setWatchMoviesCart(newMoviesCart);
        // console.log(newWatchList);
    }

    useEffect(() => {
        fetch('./movies.json')
            .then(res => res.json())
            .then(data => SetMovies(data))
    }, [])
    return (
        <div className="div row mt-4">
            <div className="col-md-9">
                <div className="div row">
                    {
                        movies.map(movie => <Movies
                            movie={movie}
                            handleAddWatchMoviesCart={handleAddWatchMoviesCart}
                            key={movie.id}></Movies>)
                    }
                </div>
            </div>
            <div className="col-md-3">
                <WatchMoviesCart watchMoviesCart={watchMoviesCart}></WatchMoviesCart>
            </div>
        </div>
    );
};

export default MovieReview;