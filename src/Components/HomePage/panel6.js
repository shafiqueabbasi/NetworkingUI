import React, { Component } from 'react';
import './home.css';

class Panel6 extends Component {
 
    render() {
      return (
        <div>
            <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 netwrkSupply">
                <h3 className="panel2Hedng"><e style={{color: 'darkmagenta'}}>Network</e> Managed Services</h3>
                <p className="panel2Pera">ATY can manage your network’s daily operation. You don’t have to worry about troubleshooting your network issues,
                    implementing new requests, tracking your changes. ATY will take all the load off you to focus on your business.
                </p>
            </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 imgDev2">
                    <div className="devMangeServes"></div>
                    <div className="devMangeServes2"></div>
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            </div>     
        </div>
    );
  }
}

export default Panel6;