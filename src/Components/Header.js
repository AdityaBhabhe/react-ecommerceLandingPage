import React from 'react'
import './Header.css'



const Header = () => {
    return(
        <header>
            <div className="header-wrapper">
                <div className="header-list">
                    <ul className='search-list'>
                        <li><button><i class="las la-bars"></i></button></li>
                        <li><button className="search-button"><i class="las la-search"></i></button></li>
                        <li><input type='text' placeholder="search here....."></input></li>
                    </ul>
                    <ul className='account-list'>
                        <li><button className="bell-notification"><i class="las la-bell"></i></button></li>
                        <li className="account-logo"><button>JA</button></li>
                        <li className="account-login">
                            <form>
                                <select name="Login Details">
                                    <option value="" disabled selected hidden>James Anderson</option>
                                    <option value="profile">Profile</option>
                                    <option value="logout">Logout</option>
                                </select>
                            </form>
                        </li>
                    </ul>
                </div>
                
            </div>
           
            
        </header>
    )
}

export default Header 