import React from 'react';
import {Link} from 'react-router-dom'
import './App.css';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function Nav() {
    
    return (
    <div className='App'>
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;