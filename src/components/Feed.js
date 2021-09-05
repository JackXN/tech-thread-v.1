import React from 'react'
import "../Styles/Feed.css";
import StoryReel from './StoryReel';    
import InputBox from './InputBox';
import Post from './Post'
function Feed() {
    return (
        <div className='feed'>
           {/* Story Reel Component */}
            <StoryReel/>
           {/* Message Sender */}
           <InputBox/>
{/* Post */}
           <Post/>
        </div>
    )
}

export default Feed
