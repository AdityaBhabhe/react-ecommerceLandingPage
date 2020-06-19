import React from 'react'
import './SideNav.css'

const SideNav = () => {
    return(
        <div className='side-nav'>
            <div className='side-nav-wrapper'>
                <div className="company-logo"></div>
                <div className='menu'>
                    <p>Menu</p>
                    <ul className="menu-list">
                        <li><i class="las la-caret-square-down"></i> Dashboard  </li>
                        <li><i class="las la-caret-square-down"></i> Instrument Details </li>
                        <li><i class="las la-caret-square-down"></i> Order History </li>
                        <li><i class="las la-caret-square-down"></i> Track Shipment </li>
                        <li><i class="las la-caret-square-down"></i> Service Requests </li>
                        <li><i class="las la-caret-square-down"></i> Warranty Details </li>
                        <li><i class="las la-caret-square-down"></i> Service Contracts </li>
                        <li><i class="las la-caret-square-down"></i> Notifications </li>
                        <li><i class="las la-caret-square-down"></i> Profile </li>
                    </ul>
                </div>
                <div className='contact-box'>
                    <form>
                                <select name="product" required>
                                    <option value="none" disabled selected hidden>Choose a language</option>
                                    <option value="english">English</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="french" selected>French</option>
                                </select>
                    </form>
                    <a>CONTACT US</a>
                </div>
            </div>
        </div>
    )
}

export default SideNav