import React, { Component } from "react";

class Gasto extends Component {
  render() {
    const { nombreGasto, cantidadGasto } = this.props.gasto;
    return (
      <li>
        {nombreGasto}
        <span className="badge badge-pill bg-primary text-white ml-4">
          $ {cantidadGasto}
        </span>
      </li>
    );
  }
}

export default Gasto;
