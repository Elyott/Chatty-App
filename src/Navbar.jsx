import React, {Component} from 'react';



function Navbar ({usersOnline}) {
    return (
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatta</a>
          <div className="userCount">
            {usersOnline} Users Online
          </div>
        </nav>
    );
}

export default Navbar;