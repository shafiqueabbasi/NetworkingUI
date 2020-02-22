import React, { Component } from 'react';
import './home.css';

class Panel2 extends Component {
 
    render() {
      return (
        <div>
            <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">

            </div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 netwrkDesgn">
                <h3 className="panel2Hedng"><e style={{color: 'darkmagenta'}}>Network</e> Design</h3>
                <p className="panel2Pera">Whether you require connection between multiple sites, data centre and public or private cloud. Whether you are
                    looking for fully redundant or partial redundant networks.
                </p><br />
                <p className="panel2Pera">ATY can help you with your network design embracing the best practices, addressing your business intiatives.</p>
            </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>

            <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1">

            </div>
            <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 netwrkDesgnImg">
            </div>
            </div>
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1"></div>
                
            
        </div>
    );
  }
}

export default Panel2;