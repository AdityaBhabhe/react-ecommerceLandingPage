import React from 'react'
import './Header.css'



const Header = () => {
    return(
        <header>
            <div className="header-wrapper">
                <div className="header-list">
                    <ul>
                        <li><button><i class="las la-bars"></i></button></li>
                        <li><button className="search-button"><i class="las la-search"></i></button></li>
                        <li><input type='text' placeholder="search here....."></input></li>
                        <li><button><i class="las la-bell"></i></button></li>
                        <li className="account-logo"><button>JA</button></li>
                    </ul>
                </div>
                
            </div>
           
            
        </header>
    )
}

export default Header 