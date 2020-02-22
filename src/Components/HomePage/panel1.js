import React, { Component } from 'react';
import './home.css';

class Panel1 extends Component {
 
    render() {
      return (
        <div>
            <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">

            </div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 netwrkCnsultng">
              <h3 className="panel1Hed">Network Consulting</h3>
              <p className="panel1Pera">You need to have a better network performance? You want to introduce new
                  network technology and not sure whether your network can support it? You have
                  a business expansion and you don’t know where to start f rom? ATY with our
                  network experts, can provide network consulting service, in order to help you
                  take the right decision.
              </p>
            </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                
            
        </div>
    );
  }
}

export default Panel1;