import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/App.css";
import Navbar from "./Navbar";
import Formulario from "./Formulario";
import Listado from "./Listado";
import ControlPresupuesto from "./ControlPresupuesto";

class App extends Component {
  state = {
    presupuesto: "",
    restante: "",
    gastos: {}
  };

  componentDidMount() {
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt("¿Cuál es el Presupuesto?");
    if (presupuesto > 0) {
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      });
    } else {
      this.obtenerPresupuesto();
    }
  };

  agregarGasto = gasto => {
    // Creo copia de gasto
    const gastos = { ...this.state.gastos };

    // Agregar objeto creado con ID unico al conjunto de gastos
    gastos[`gasto-${Date.now()}`] = gasto;

    // Asigno objeto gasto a gastos
    this.setState({
      gastos: gastos
    });

    this.restarRestante(gasto.cantidadGasto);
  };

  restarRestante = cantidad => {
    // Pasar cantidad a numerico
    let restar = Number(cantidad);

    // Copia restante
    let restante = this.state.restante;

    // Restar
    restante -= restar;

    // Actualizar State
    this.setState({
      restante
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar titulo="Control de Gastos" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Formulario agregarGasto={this.agregarGasto} />
            </div>
            <div className="col-md-6">
              <Listado gastos={this.state.gastos} />
              <ControlPresupuesto
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
