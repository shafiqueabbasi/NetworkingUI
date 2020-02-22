import React, { Component } from 'react';
import './home.css';

class Banner extends Component {
 
    render() {
      return (
        <div className="banner">
            <div className="row">
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-10 check">
                    <h1 className="netwrkHedng">Network <br/>
                        SOLUTION
                    </h1>
                    <p className="netwrkP">Specialist In Wired Network Installation</p>
                </div>
                <div className="col-xl-none col-lg-none col-md-none col-sm-none col-xs-1"></div>
                <div className="col-xl-none col-lg-none col-md-none col-sm-none col-xs-1"></div>
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-xs-10 check2"></div>
                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
            </div>
        </div>
    );
  }
}

export default Banner;