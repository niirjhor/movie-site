import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='text-center bg-dark text-white'>
                <h2><img className='banner-img' src="./movie-review-website.png" alt="" srcset="" /> Online Movie Review by Nirjhor</h2>
            </div>
            <h2 className='bg-warning text-center'>Welcome to the Biggest Movie Review Site with more than 10,000 Movies</h2>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid nav">
                    <a href='https://www.imdb.com/?ref_=nv_home' className="navbar-brand">Home</a>
                    <a href='https://www.imdb.com/?ref_=nv_home' className="navbar-brand">Menu</a>
                    <form className="d-flex mx-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                    <a href='https://www.imdb.com/?ref_=nv_home' className="navbar-brand">Watchlist</a>
                    <a href='https://www.imdb.com/?ref_=nv_home' className="navbar-brand">About Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;