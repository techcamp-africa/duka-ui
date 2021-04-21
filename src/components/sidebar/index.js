import React, { useState } from 'react'
import { Container, Icon, ListLink, List, ListItem, Logo } from './SidebarElements'
import { GiHamburgerMenu, IoCloseSharp} from 'react-icons/all'
import {Link} from 'react-router-dom'

import {SidebarData} from './SIdebarData'

import './sidebar.css'

function Sidebar() {

    const [sidebar, setSidebar] = useState(true)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <div className="navbar">
                <GiHamburgerMenu className="menu-bars" onClick={showSidebar} />
                <Link to="/" className="logo">DUKA</Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <IoCloseSharp style={{marginTop: '.7rem'}} onClick={showSidebar}/>
                        </Link>
                        <Link to="/" className="logo">DUKA</Link>
                    </li>

                    {/* map the link to be shown on the sidebar */}
                    {SidebarData.map((item, index) => (
                        <li key={index} className={item.cName} onClick={showSidebar}>
                            <Link to={item.path} onClick={showSidebar}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

            </nav>
        </>
    )
}

export default Sidebar

