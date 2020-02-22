import React, { Component } from 'react';
import './home.css';

class Panel4 extends Component {
 
    render() {
      return (
        <div>
            <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 netwrkSupply">
                <h3 className="panel2Hedng"><e style={{color: 'darkmagenta'}}>Network</e> Supply</h3>
                <p className="panel2Pera">ATY Cloud can provide competitive prices to Cisco/Meraki devices, RACKs, Servers, Cables.</p>
                <p className="panel2Pera">We are working with our partner to provide very competitive quote.</p>
                <p className="panel2Pera">We can beat any other network quote in Cisco</p>
            </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 imgDev2">
                    <div className="netwrkSupplyImg"></div>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            </div>     
        </div>
    );
  }
}

export default Panel4;

// <div style={{width: '100%',backgroundColor: 'rgba(93, 135, 150, 0.5)'}}>
//                        <div className="netwrkCablingImg"></div>
//                    </div> */