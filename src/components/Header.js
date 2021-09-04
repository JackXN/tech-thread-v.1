import React from 'react'
import "../Styles/Header.css"



function Header() {
    return (
        <div className='header'>
            <h1>Hello</h1>
            {/* Header Left */}
            <div className='header_left'>
<img src='https://wpguru.co.uk/wp-content/uploads/2019/08/124010.png' alt='facebook-logo'/>

            </div>
            {/* Header middle */}
            <div className='header_middle'></div>
             {/* Header right */}
             <div className='header_right'></div>
        </div>
    )
}

export default Header
