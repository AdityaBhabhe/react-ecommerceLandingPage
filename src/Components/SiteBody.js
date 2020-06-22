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
                                <select name="product" required>
                                    <option value="none" disabled selected hidden>Product</option>
                                    <option value="avio 200 Cross-Flow Spectrometer">Avio 200 Cross-Flow Spectrometer</option>
                                    <option value="spectrum two ft - ir">Spectrum Two FT - IR</option>
                                    <option value="lambda 365 spectrometer uv express" selected>LAMBDA 365 Spectrometer UV Express</option>
                                </select>
                            </form>
                        </li>
                        <li>
                        <form>
                                <select name="Model Series">
                                    <option value="" disabled selected hidden>Choose a drink</option>
                                    <option value="avio 200">AVIO 200</option>
                                    <option value="spectrum two">SPECTRUM TWO</option>
                                    <option value="lambda x50" selected>LAMBDA X50</option>
                                </select>
                            </form>
                        </li>
                        <li>
                        <form>
                                <select name="Icecream Flavours">
                                    <option value="" disabled selected hidden>Choose a drink</option>
                                    <option value="icpno790010">ICPN0790010</option>
                                    <option value="irl1600300">IRL1600300</option>
                                    <option value="uvsn4100020" selected>UVSN4100020</option>
                                </select>
                            </form>
                        </li>
                        <li>
                        <form>
                                <select name="Location">
                                    <option value="" disabled selected hidden>Choose a drink</option>
                                    <option value="mohali">MOHALI,PUNJAB</option>
                                    <option value="bangalore">BANGALORE</option>
                                    <option value="vadodara" selected>VADODARA,GUJARAT</option>
                                </select>
                            </form>
                        </li>
                        <button className="button search">SEARCH</button>
                    </ul>
                </div>
                <div className="product-section">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <div class="card">
                                <div class="card-body">
                                    <div class="product-img"></div>
                                    <h4 class="card-title"><a>Avio 200 Cross-Flow Spectrometer</a></h4>
                                    <hr></hr>
                                    <p class="card-text"><strong>Model Number </strong> : <span>ICPNo790010</span></p>
                                    <p class="card-text"><strong>Model Series</strong> : <span>AVIO 200</span></p>
                                    <p class="card-text"> <strong>Location</strong> : <span>BANGALORE</span></p>
                                    <button type="button" class="btn btn-primary btn-rounded details-button">VIEW DETAILS</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div class="card">
                                <div class="card-body">
                                    <div class="product-img"></div>
                                    <h4 class="card-title"><a>Spectrum Two FT-IR</a></h4>
                                    <hr></hr>
                                    <p class="card-text"> <strong>Model Number</strong> : <span>IRL1600300</span></p>
                                    <p class="card-text"><strong>Model Series</strong> : <span>SPECTRUM 2</span></p>
                                    <p class="card-text"> <strong>Location</strong> : <span>BANGALORE</span></p>
                                    <button type="button" class="btn btn-primary btn-rounded details-button">VIEW DETAILS</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div class="card">
                                <div class="card-body">
                                    <div class="product-img"></div>
                                    <h4 class="card-title"><a>LAMBDA 365 Spectrometer UV Express</a></h4>
                                    <hr></hr>
                                    <p class="card-text"> <strong>Model Number</strong> : <span>UVSN4100020</span></p>
                                    <p class="card-text"><strong>Model Series</strong> : <span>LAMBDA X50</span></p>
                                    <p class="card-text"><strong>Location</strong> : <span>BHOPAL</span></p>
                                    <button type="button" class="btn btn-primary btn-rounded details-button">VIEW DETAILS</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                        <div class="card">
                                <div class="card-body">
                                    <div class="product-img"></div>
                                    <h4 class="card-title"><a>LAMBDA 365 Spectrometer UV Express</a></h4>
                                    <hr></hr>
                                    <p class="card-text"><strong>Model Number </strong> : <span>UVSN4100020</span></p>
                                    <p class="card-text"><strong>Model Series</strong> : <span>LAMBDA X50</span></p>
                                    <p class="card-text"><strong>Location</strong> : <span>MOHALI,PUNJAB</span></p>
                                    <button type="button" class="btn btn-primary btn-rounded details-button">VIEW DETAILS</button>
                                </div>
                            </div>
                        </div>
                    </div>
      
                    
                    {/* <div className="product-card">
                        <div className="product-wrapper">
                            <div className="product-images"></div>      
                            <h2><a href="#" >Avio 200 Cross-Flow Spectrometer</a></h2>
                            <hr></hr>
                            <p><strong>Model Number: </strong>ICPN0790010</p>
                            <p><strong>Model Series: </strong>AVIO 200</p>
                            <p><strong>Location: </strong>BANGALORE</p>
                            <button className="button details">VIEW DETAILS</button>
                        </div>
                    </div> */}
                    {/* <div className="product-card">
                        <div className="product-wrapper">
                            <div className="product-images"></div>        
                            <h2><a href="#">Spectrum Two FT - IR</a></h2>
                            <hr></hr>
                            <p><strong>Model Number: </strong>IRL1600300</p>
                            <p><strong>Model Series: </strong>SPECTRUM TWO</p>
                            <p><strong>Location: </strong>VADODARA,GUJARAT</p>
                            <button className="button details">VIEW DETAILS</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <div className="product-wrapper">
                            <div className="product-images"></div>      
                            <h2><a href="#">LAMBDA 365 Spectrometer UV Express</a></h2>
                            <hr></hr>
                            <p><strong>Model Number: </strong>ICPN0790010</p>
                            <p><strong>Model Series: </strong>LAMBDA X50</p>
                            <p><strong>Location: </strong>BANGALORE</p>
                            <button className="button details">VIEW DETAILS</button>
                        </div>
                    </div>  
                    <div className="product-card">
                        <div className="product-wrapper">
                            <div className="product-images"></div>        
                            <h2><a href="#">LAMBDA 365 Spectrometer UV Express</a></h2>
                            <hr></hr>
                            <p><strong>Model Number: </strong>UVSN4100020</p>
                            <p><strong>Model Series: </strong>LAMBDA X50</p>
                            <p><strong>Location: </strong>MOHALI,PUNJAB</p>
                            <button className="button details">VIEW DETAILS</button>
                        </div>
                    </div>       */}
                </div>
            </div>
            
            
        </main>
    )
}

export default SiteBody