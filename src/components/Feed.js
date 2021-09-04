import React from 'react'
import "../Styles/Feed.css";
import StoryReel from './StoryReel';    
import InputBox from './InputBox';
function Feed() {
    return (
        <div className='feed'>
           {/* Story Reel Component */}
            <StoryReel/>
           {/* Message Sender */}
           <InputBox/>
        </div>
    )
}

export default Feed
