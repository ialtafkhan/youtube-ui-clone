import React, { useState } from 'react'
import { WhiteLogo, Avatar } from '../../Assets/ImageIndex'
import "./Navbar.css"
const Navbar = () => {
    const [isDarkTheme, setisDarkTheme] = useState(true)
    const [openNav, setOpenNav] = useState(false)
    const [search, setSearch] = useState("")

    const handleSidebar = () => {
        const sidebarConatiner = document.getElementById('sidebarContainer')
        const homeContainer = document.getElementById('homeContainer')
        sidebarConatiner.classList.toggle('close')
        homeContainer.classList.toggle('changePadding')
    }

    const handleThemes = () => {
        const rootElement = document.getElementById('root')
        rootElement.classList.toggle('dark-theme')
        setisDarkTheme(!isDarkTheme)
    }
    return (<>


        <header>
            <div className="headerDiv">
                <div>
                    <div className="humburger">
                        <div onClick={handleSidebar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <img src={WhiteLogo} alt="youtube logo" title='youtube' />
                </div>
                <div className="searchContainer">
                    <div className="searchBox">
                        <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                        {search !== '' && <span className='material-symbols-rounded' onClick={(e) => setSearch("")}  >
                            close
                        </span>}
                    </div>
                    <div className="searchBtn">
                        <span className='material-symbols-rounded' >
                            search
                        </span>
                    </div>
                    <div className="searchMic">
                        <span className='material-symbols-rounded active' >
                            mic
                        </span>
                    </div>
                </div>
                <div className="profileContainer">
                    <span className='material-symbols-rounded' >
                        add_box
                    </span>
                    <span className='material-symbols-rounded' >
                        notifications
                    </span>
                    <img src={Avatar} alt=" your Avtar" onClick={(e) => setOpenNav(!openNav)} />

                </div>
            </div>
            {openNav && <div className="profileBtns">
                <div className="avatarInfo profileTab ">
                    <img src={Avatar} alt="your Avatar" title='avatar' />
                    <p> fronttend Developer </p>
                </div>
                <div className="horizontalLine"></div>
                <div className="profileTabs">
                    <div className="profileTab">
                        <span className='material-symbols-rounded' >
                            account_box
                        </span>
                        <p>Your Channel</p>
                    </div>
                    <div className="profileTab">
                        <span className='material-symbols-rounded' >
                            play_circle
                        </span>
                        <p>Youtube Studio</p>
                    </div>
                    <div className="profileTab">
                        <span className='material-symbols-rounded'>
                            logout
                        </span>
                        <p>Sign Out</p>
                    </div>
                </div>
                <div className="horizontalLine"></div>
                <div className="profileTabs">
                    <div className="profileTab">
                        <span className='material-symbols-rounded' >
                            monetization_on
                        </span>
                        <p>purchase and Membership</p>
                    </div>
                    <div className="profileTab">
                        <span className='material-symbols-rounded' >
                            admin_panel_settings
                        </span>
                        <p>Your Data on Youtube</p>
                    </div>

                </div>
                <div className="horizontalLine"></div>
                <div className="profileTabs">
                    {isDarkTheme && <div className="profileTab" onClick={handleThemes} >
                        <span className='material-symbols-rounded' >
                            light_mode
                        </span>
                        <p>light Theme</p>
                    </div>}
                    {!isDarkTheme && <div className="profileTab" onClick={handleThemes}   >
                        <span className='material-symbols-rounded'>
                            bedtime
                        </span>
                        <p>Dark Theme</p>
                    </div>}
                    <div className="profileTab">
                        <span className='material-symbols-rounded'>
                            Settings
                        </span>
                        <p>Settings </p>
                    </div>
                </div>

                <div className="horizontalLine"></div>
                <div className="profileTabs">
                    <div className="profileTab">
                        <span className='material-symbols-rounded'>
                            help
                        </span>
                        <p>Help</p>
                    </div>
                    <div className="profileTab">
                        <span className='material-symbols-rounded'>
                            sms_failed
                        </span>
                        <p>Send Feedback</p>
                    </div>
                </div>
            </div>}
        </header>
    </>
    )
}

export default Navbar
