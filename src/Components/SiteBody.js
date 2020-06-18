import React from 'react'
import './SiteBody.css'


const SiteBody = () => {
    return(
        <main>
            <div className="main-wrapper">
                <div className = "filter-list">
                    <ul>
                        <li className="filter-icon"><i class="las la-filter"></i>Filter</li>
                        <li>
                            <form>
                                <select name="product">
                                    <option value="avio 200 Cross-Flow Spectrometer">Avio 200 Cross-Flow Spectrometer</option>
                                    <option value="spectrum two ft - ir">Spectrum Two FT - IR</option>
                                    <option value="lambda 365 spectrometer uv express" selected>LAMBDA 365 Spectrometer UV Express</option>
                                </select>
                            </form>
                        </li>
                        <li>
                        <form>
                                <select name="Model Series">
                                    <option value="avio 200">AVIO 200</option>
                                    <option value="spectrum two">SPECTRUM TWO</option>
                                    <option value="lambda x50" selected>LAMBDA X50</option>
                                </select>
                            </form>
                        </li>
                        <li>
                        <form>
                                <select name="Icecream Flavours">
                                    <option value="icpno790010">ICPN0790010</option>
                                    <option value="irl1600300">IRL1600300</option>
                                    <option value="uvsn4100020" selected>UVSN4100020</option>
                                </select>
                            </form>
                        </li>
                        <li>
                        <form>
                                <select name="Icecream Flavours">
                                    <option value="mohali">MOHALI,PUNJAB</option>
                                    <option value="bangalore">BANGALORE</option>
                                    <option value="vadodara" selected>VADODARA,GUJARAT</option>
                                </select>
                            </form>
                        </li>
                        <button className="button search">Search</button>
                    </ul>
                </div>
                <div className="product-section">
                    <div className="product-card">
                        <div className="product-wrapper">
                            <img src="" alt=""></img>        
                            <h2><a href="#" >Avio 200 Cross-Flow Spectrometer</a></h2>
                            <hr></hr>
                            <p><strong>Model Number: </strong>ICPN0790010</p>
                            <p><strong>Model Series: </strong>AVIO 200</p>
                            <p><strong>Location: </strong>BANGALORE</p>
                            <button className="button">VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-wrapper">
                            <img src="" alt=""></img>        
                            <h2><a href="#">Spectrum Two FT - IR</a></h2>
                            <hr></hr>
                            <p><strong>Model Number: </strong>IRL1600300</p>
                            <p><strong>Model Series: </strong>SPECTRUM TWO</p>
                            <p><strong>Location: </strong>VADODARA,GUJARAT</p>
                            <button className="button">VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-wrapper">
                            <img src="" alt=""></img>        
                            <h2><a href="#">LAMBDA 365 Spectrometer UV Express</a></h2>
                            <hr></hr>
                            <p><strong>Model Number: </strong>ICPN0790010</p>
                            <p><strong>Model Series: </strong>LAMBDA X50</p>
                            <p><strong>Location: </strong>BANGALORE</p>
                            <button className="button">VIEW DETAILS</button>
                        </div>
                    </div>  
                    <div className="product-card">
                        <div className="product-wrapper">
                            <img src="" alt=""></img>        
                            <h2><a href="#">LAMBDA 365 Spectrometer UV Express</a></h2>
                            <hr></hr>
                            <p><strong>Model Number: </strong>UVSN4100020</p>
                            <p><strong>Model Series: </strong>LAMBDA X50</p>
                            <p><strong>Location: </strong>MOHALI,PUNJAB</p>
                            <button className="button">VIEW DETAILS</button>
                        </div>
                    </div>      
                </div>
            </div>
            
            
        </main>
    )
}

export default SiteBody