import React from 'react'
import "../Styles/Feed.css";
import StoryReel from './StoryReel';    
function Feed() {
    return (
        <div className='feed'>
           {/* Story Reel Component */}
            <StoryReel/>
           {/* Message Sender */}
        </div>
    )
}

export default Feed
