import React from 'react';
import {Link} from 'react-router-dom';

function MainNavigationBar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Main Navigation Bar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/discover">Discover</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tournaments">Tournaments</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leader Board</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}


export default MainNavigationBar;