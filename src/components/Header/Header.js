import React from 'react' 

import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='logo-cont'>
                <a href='/'>
                    <h1 className='logo'>
                        OneMust.Live
                    </h1>
                </a>
            </div>
            <div className='link-cont'>
                <div className='link-ind'>
                    <a href='#'>
                        About
                    </a>
                </div>
                <div className='link-ind'>
                    <a href='#'>
                        Login
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header