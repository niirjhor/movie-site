import React from 'react';

const Header = () => {
    return (
        <div>
            <h2 className='bg-warning text-center'>Welcome to the Biggest Movie Review Site</h2>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Home</a>
                    <a className="navbar-brand">Menu</a>
                    <form className="d-flex mx-5">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-warning" type="submit">Search</button>
                    </form>
                    <a className="navbar-brand">Watchlist</a>
                    <a className="navbar-brand">About Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;