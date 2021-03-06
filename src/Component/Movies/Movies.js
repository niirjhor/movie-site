import React from 'react';
import './Movies.css'
const Movies = (props) => {
    // console.log(props);
    const { id, Name, Gross, Year, WeekendCollection, Rating, img } = props.movie; // destructuring
    return (
        <div className="div col-md-4 gy-2 text-center">
            <div className="card bg-warning border border-dark" style={{ "width": "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Movie Name: {Name}</h5>
                    <p className='text-dark'>Release Year: {Year}</p>
                    <p className='text-dark'>Weekend Collection: ${WeekendCollection} M</p>
                    <p className='text-dark'>Gross Collection: ${Gross} M</p>
                    <p className='text-dark fw-bold'>Movie Rating<i class="fas fa-star"></i> {Rating}</p>
                    <button
                        onClick={() =>
                            props.handleAddWatchMoviesCart(props.movie)
                        }
                        className='btn btn-danger'><i className="fas fa-cart-plus"></i> Add to Watchlist</button>
                </div>
            </div>
        </div >
    );
};

export default Movies;