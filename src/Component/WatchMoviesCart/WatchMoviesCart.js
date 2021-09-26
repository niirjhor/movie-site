import React from 'react';

const WatchMoviesCart = (props) => {
    const { watchMoviesCart } = props; // destructuring
    const totalReducer = (preValue, currentValue) => preValue + currentValue.Gross;
    const totalReducer1 = (preValue, currentValue) => preValue + currentValue.Rating;
    const total = watchMoviesCart.reduce(totalReducer, 0) // calculating totol gross 
    const total1 = watchMoviesCart.reduce(totalReducer1, 0) // calculating totol rating
    return (
        <div>
            <div>
                <h2 className='bg-dark text-white text-center'>Watch List <i class="fas fa-film"></i> </h2>
                <ul className="list-group">
                    {
                        watchMoviesCart.map(movie => <li className="list-group-item d-flex justify-content-between align-items-center">Movie Names<span className="badge bg-primary rounded-pill">{movie.Name}</span></li>)
                    }
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Total Watched Movies
                        <span className="badge bg-primary rounded-pill">{watchMoviesCart.length}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Total Rating
                        <span className="badge bg-primary rounded-pill">{total1.toFixed(2)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Total Gross Collection
                        <span className="badge bg-primary rounded-pill">{total.toFixed(2)}</span>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default WatchMoviesCart;