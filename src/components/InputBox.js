import React from 'react'
import { Avatar } from '@material-ui/core';
import "../Styles/InputBox.css";
function InputBox() {
    return (
        <div className='inputBox'>
            {/* Input Top */}
            <div className='input_top'>
<Avatar/>       

<form>
    <input type='text' placeholder={'Whats on your mind?'}/>
<input placeholder='imae URL (optional)'/>
</form>
            </div>

            {/* Input Bottom */}
            <div className='input_bottom'>


            </div>

        </div>
    )
}

export default InputBox
