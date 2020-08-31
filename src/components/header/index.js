import React from 'react';
import './style.css';
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Header() {

    const history = useHistory();
    return (
        <div className='header'>

            <div className='header_logo'>
                <a href={() => false} onClick={() => history.push('/')}>
                    <img
                        className="header_icon"
                        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                        alt=""
                    />
                </a>
            </div>
            
            <div className='header_center'>
                <input type="text" />
                <SearchIcon />
            </div>

            <div className='header_right'>
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header