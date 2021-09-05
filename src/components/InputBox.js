import React, {useState} from 'react'
import { Avatar } from '@material-ui/core';
import "../Styles/InputBox.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

function InputBox() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('')

const handleSubmit = (e) => {
   e.preventDefault();
//    console.log('submitted')



setInput('');
setImageUrl('');

}

    return (
        <div className='inputBox'>
            {/* Input Top */}
            <div className='input_top'>
<Avatar/>       

<form onSubmit={handleSubmit} className='inputBox_input'>

    <input value={input} onChange={(e) =>setInput(e.target.value) } type='text' placeholder={'Whats on your mind?'}/>

<input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder='Image URL (optional)'/>

<button type='submit' onSubmit={handleSubmit} hidden>this button is hiding</button>
</form>
            </div>

            {/* Input Bottom */}
            <div className='input_bottom'>
                <div className='inputBox_option'>
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className='inputBox_option'>
                    <CameraAltIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className='inputBox_option'>
                    <EmojiEmotionsIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            <div className='input_option'>

            </div>

            <div className='input_option'>
                
                </div>
                
                <div className='input_option'>
                
                </div>

            </div>

        </div>
    )
}

export default InputBox
