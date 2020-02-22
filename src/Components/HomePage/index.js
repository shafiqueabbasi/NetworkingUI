import React, { Component } from 'react';
import './home.css';
import Banner from './banner';
import Panel1 from './panel1';
import Panel2 from './panel2';
import Panel3 from './panel3';
import Panel4 from './panel4';
import Panel5 from './panel5';
import Panel6 from './panel6';

class Index extends Component {
 
    render() {
      return (
        <div>
             <Banner />
             <Panel1 />
             <Panel2 />
             <Panel3 />
             <Panel4 />
             <Panel5 />
             <Panel6 />  
        </div>
    );
  }
}

export default Index;