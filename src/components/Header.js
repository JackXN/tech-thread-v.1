/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import "../Styles/Header.css"



function Header() {
    return (
        <div className='header'>
        {/* Header left */}
            <div className='header_left'>
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png' alt='facebook-logo'/>
<div className='header_input'>
    <SearchIcon/>
    <input type='text'/>
</div>
            </div>

            {/* Header Middle */}
            <div className='header_middle'>

                
            </div>

             {/* Header right */}
             <div className='header_right'></div>
        </div>
    )
}

export default Header
