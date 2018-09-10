import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/App.css";
import Navbar from "./Navbar";
import Formulario from "./Formulario";
import Listado from "./Listado";

class App extends Component {
  state = {
    presupuesto: "",
    restante: "",
    gastos: {}
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

    console.log(gastos);
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
