import React from 'react' 

import './Footer.component.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='top'>
                <div className='left'>
                    <p><strong>Share your adventure!</strong></p>
                    <p>OneMust.Live is a social networking website where you can share your stories of living.
                    Inspired by Alan Watts' spoken word <i><a href='#'>Overthinking Will Kill Your Reality</a></i></p>
                    <p>Life is to be lived, One Must Live It!</p>
                </div>
                <div className='right'>
                    <a href='/'>Home</a>
                    <a href='/philosophy'>Philosophy</a>
                    <a href='/contact'>Contact Us</a>
                    <a href='#'>Login</a>
                </div>
            </div>
            <div className='bottom'>
                Designed by <a href='https://github.com/jshaw990'>Jayden Shaw</a>
            </div>
        </div>
    )
}

export default Footer