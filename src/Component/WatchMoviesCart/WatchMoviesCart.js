import React from 'react';

const WatchMoviesCart = (props) => {
    const { watchMoviesCart } = props;
    const totalReducer = (preValue, currentValue) => preValue + currentValue.Gross;
    const totalReducer1 = (preValue, currentValue) => preValue + currentValue.Rating;
    const total = watchMoviesCart.reduce(totalReducer, 0)
    const total1 = watchMoviesCart.reduce(totalReducer1, 0)
    return (
        <div>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Total Watched Movies:
                    <span class="badge bg-primary rounded-pill">{watchMoviesCart.length}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    A second list item
                    <span class="badge bg-primary rounded-pill">{total.toFixed(2)}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span class="badge bg-primary rounded-pill">{total1.toFixed(2)}</span>
                </li>
            </ul>
        </div>
    );
};

export default WatchMoviesCart;