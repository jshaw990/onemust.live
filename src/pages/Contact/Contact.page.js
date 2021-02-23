import React, { useEffect } from 'react' 

import './Contact.page.css'

function Contact() {
    useEffect(() => {
        document.title = 'Contact | OneMust.Live'
    })

    return (
        <div className='contact-cont'>
            <div className='contact'>
                OneMust.Live is currently under construction.<br />
                For more information contact us <a href='mailto:jayden.shaw@gmail.com'>via email</a><br />
                Or look for updates at our <a href='https://github.com/jshaw990/onemust.live'>GitHub Repository</a>
            </div>
        </div>
    )
}

export default Contact