import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <img className="header__logo_img" src="./logo192.png" alt="logo"/>
            </div>
            <div className="header__nav">
                <Link to="/" className="header__nav_link">
                    <div className="">
                        HOME
                    </div>
                </Link>
                <Link to="/recipes" className="header__nav_link">
                    <div className="">
                        RECIPE
                    </div>
                </Link>
                <Link to="/cultural" className="header__nav_link">
                    <div className="">
                        CULTURAL
                    </div>
                </Link>
                <Link to="/about-us" className="header__nav_link">
                    <div className="">
                        ABOUT US
                    </div>
                </Link>
                <Link to="/team" className="header__nav_link">
                    <div className="">
                        TEAM
                    </div>
                </Link>
            </div>
        </div>
    );
};
