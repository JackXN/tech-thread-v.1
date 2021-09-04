import React from 'react'
import "../Styles/Sidebar.css";
import SidebarRow from './SidebarRow';
function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow title='Pages'/>
            <SidebarRow title='Friends'/>
            <SidebarRow title='Friends'/>
            <SidebarRow title='Friends'/>
            <SidebarRow title='Friends'/>
        </div>
    )
}

export default Sidebar
