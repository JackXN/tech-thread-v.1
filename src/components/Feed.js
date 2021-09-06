import React , {useState, useEffect} from 'react'
import "../Styles/Feed.css";
import StoryReel from './StoryReel';    
import InputBox from './InputBox';
import Post from './Post'
import db from '../firebase'

function Feed() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
db.collectionf('posts').onSnapshot(snapshot => (
setPosts(snapshot.docs.map(doc => ({id: doc.id, data: doc.data()})))
))
    }, [])
    
    return (
        <div className='feed'>
           {/* Story Reel Component */}
            <StoryReel/>
           {/* Message Sender */}
           <InputBox/>
{/* Post */}
           <Post
            profilePic='https://cdn.dribbble.com/users/10549/screenshots/9916149/media/a9dbfea8e23e5b8e23db142528c3bc9f.png?compress=1&resize=400x300'
            image='https://cdn.dribbble.com/users/1068771/screenshots/14225432/media/0da8c461ba3920a8c827d864a6e051ed.jpg?compress=1&resize=400x300'
            username='JackXN'
            timestamp='this is a timestamp'
            message='wow this works'
/>
        </div>
    )
}

export default Feed
