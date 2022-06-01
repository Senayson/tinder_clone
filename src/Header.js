import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import "./Header.css";

function Header(){
    return(
        <div className='header'>   
            <PersonIcon className="header_icon" fontSize="large"/>
            <img className="header__logo" src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon-3.png" alt="tinder logo" />
            <ForumIcon className="header_icon" fontSize="large"/>
        </div>
    )
}


export default Header