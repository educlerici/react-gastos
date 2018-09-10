import React, { Component } from "react";

import Presupuesto from "./Presupuesto";
import Restante from "./Restante";

class ControlPresupuesto extends Component {
  state = {};
  render() {
    return (
      <div>
        <Presupuesto presupuesto={this.props.presupuesto} />
        <Restante
          presupuesto={this.props.presupuesto}
          restante={this.props.restante}
        />
      </div>
    );
  }
}

export default ControlPresupuesto;
