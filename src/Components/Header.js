import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Header() {
    return (
        <div>

            <nav className="header" >
                <Link to='/'>
                    <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" />
                </Link>
                <div className="header__search">
                    <input type="text" className="header__searchInput" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <span  className="header__optionLineOne">
                                Hello, Vivek
                            </span>
                            <span className="header__optionLineTwo">
                                Account & Lists
                            </span>
                        </div>

                    </Link>

                    <Link to="/login" className="header__link">
                        <div className="header__option">
                            <span className="header__optionLineOne">
                               Returns
                            </span>
                            <span className="header__optionLineTwo">
                                & Orders
                            </span>
                        </div>
                    </Link>
{/* LINK TO CART */}
                    <Link to="/checkout" className="header__link">
                        <div className="header__option">
                            <span className="header__optionBasket">
                               <ShoppingCartOutlinedIcon/>
                            </span>
                            <span className="header__optionLineTwo">
                                0
                            </span>
                        </div>
                    </Link>
                 
                </div>
            </nav>
                   </div>
    )
}

export default Header
