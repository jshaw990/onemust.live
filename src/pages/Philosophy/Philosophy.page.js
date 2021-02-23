import React, { useEffect } from 'react' 

import './Philosophy.page.css'

function Philosophy() {
    useEffect(() => {
        document.title = 'Philosophy | OneMust.Live'
    })

    return (
        <div className='philosophy-cont'>
            <div className='philosophy-1'>
            <h1>The Philosophy of OneMust.Live</h1>
                <blockquote>
                    A person who thinks all the time has nothing to think about except thought. So, he loses touch with reality and lives in a world of illusions. By thoughts I mean specifically "chatter in the skull"... perpetual and compulsive repetition of words... of reckoning and calculating.<br /><br />
                    I'm not saying thinking is bad. Like everything else, it's useful in moderation. A good servant, but a bad master - and all so called civilized peoples have become increasingly crazy and self-destructive. Through excessive thinking, they have lost touch with reality.<br /><br />
                    Most of us would have rather money than tangible wealth... and a great occasion is somehow spoiled for us unless photographed... and to read about it the next day in the newspaper is oddly more fun for us than the original event. <br /><strong>This is a disaster.</strong><br /><br />
                    To get in touch with reality there is an art of meditation... It is the art of temporarily silencing the mind... of stopping the "chatter in the skull". Of course you can't force your mind to be silent. That would be like trying to smooth ripples in water with a flat iron. Water becomes cool and clear only when left alone.
                </blockquote>
                <h2>Its time to wakeup</h2>
            </div>
        </div>
    )
}

export default Philosophy 