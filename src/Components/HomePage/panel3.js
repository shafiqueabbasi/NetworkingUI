import React, { Component } from 'react';
import './home.css';

class Panel3 extends Component {
 
    render() {
      return (
        <div>
            <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 netwrkCable">
                <h3 className="panel2Hedng"><e style={{color: 'darkmagenta'}}>Network</e> Cabling</h3>
                <p className="panel2Pera">With our Siemon Certied cabling team, we can provide all sorts of cabling for your network.</p>
            </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 imgDev">
                    <div style={{width: '100%',backgroundColor: 'rgba(93, 135, 150, 0.5)'}}>
                        <div className="netwrkCablingImg"></div>
                    </div>
                    
                </div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            </div>     
        </div>
    );
  }
}

export default Panel3;