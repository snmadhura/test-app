import React, { Component } from 'react';
import Aux from '../../../Auxilliary/Auxilliary';
import './Modal.css';

class Modals extends Component {
  render() {
    return (
      <Aux>
        <div className="Modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>       
 
      </Aux>
    );
  }

}

export default Modals;