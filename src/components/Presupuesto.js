import React, { Component } from "react";

class Presupuesto extends Component {
  state = {};
  render() {
    return (
      <div className="alert alert-primary my-3" role="alert">
        Presupuesto: $ {this.props.presupuesto}
      </div>
    );
  }
}

export default Presupuesto;
