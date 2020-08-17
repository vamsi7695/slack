import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {useStateValue} from "../../StateProvider";

function Header() {

    const [{user}] = useStateValue();
 
    return (
        <div className="header">
            <div className="header--left">

                {/* Avatar for logged in user */}
                <Avatar className="header--avatar" alt={user?.displayName} src={user?.photoURL} />
                {/* time icon */}
                <AccessTimeIcon />

            </div>
            <div className="header--search">

                {/* search icon */}
                <SearchIcon />
                {/* input */}
                <input placeholder="Search here in Slack" />

            </div>
            <div className="header--right">

                {/* help icon */}
                <HelpOutlineIcon />
                
            </div>
        </div>
    );
}

export default Header;
