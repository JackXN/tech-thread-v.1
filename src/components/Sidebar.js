import React from 'react'
import "../Styles/Sidebar.css";
import SidebarRow from './SidebarRow';
import {EmojiFlagsIcon} from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StoreFrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import People from '@material-ui/icons/People';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from '../StateProvider';





function Sidebar() {

    const [{user}, dispatch] = useStateValue()
    return (
        <div className='sidebar'>
            <SidebarRow title={user.displayName} src={user.photoUrl}/>
            <SidebarRow title='Pages'  Icon={EmojiFlagsIcon}/>
            <SidebarRow title='Friends' Icon={People}/>
            <SidebarRow title='Messenger' Icon={ChatIcon}/>
            <SidebarRow title='Marketplace' Icon={StoreFrontIcon}/>
            <SidebarRow title='Videos' Icon={VideoLibraryIcon}/>
            <SidebarRow title='Marketplace' Icon={ExpandMoreOutlined}/>
        </div>
    )
}

export default Sidebar
