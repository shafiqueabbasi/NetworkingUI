import React, { Component } from 'react';
import './home.css';

class Panel5 extends Component {
 
    render() {
      return (
        <div>
            <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 netwrkSupply">
                <h3 className="panel2Hedng"><e style={{color: 'darkmagenta'}}>Network</e> Deployment</h3>
                <p className="panel2Pera">ATY carries out full implementation and deployment to network devices, including, routers, switches, rewalls wireless
                    controllers, and establish connections between the sites and perform failover testing.
                </p>
            </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 imgDev2">
                    <div className="devImg1"></div>
                    <div className="devImg2"></div>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            </div>     
        </div>
    );
  }
}

export default Panel5;