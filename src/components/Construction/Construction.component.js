import React from 'react' 

import './Construction.component.css'

import construction from '../../assets/images/construction.png'

function Construction() {
    return (
        <div className='construction'>
            <img src={construction} className='crane' alt='Under Construction' />
            <div className='text'>OneMust.Live is currently under construction</div>
        </div>
    )
}

export default Construction