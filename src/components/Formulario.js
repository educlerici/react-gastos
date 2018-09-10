import React, { Component } from "react";

class Formulario extends Component {
  nombreGasto = React.createRef();
  cantidadGasto = React.createRef();

  crearGasto = e => {
    e.preventDefault();

    const gasto = {
      nombreGasto: this.nombreGasto.current.value,
      cantidadGasto: this.cantidadGasto.current.value
    };

    console.log(gasto);

    this.props.agregarGasto(gasto);

    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="mt-4" onSubmit={this.crearGasto}>
        <h2>¡ Agrega tus gastos aquí !</h2>

        <div className="form-group mt-3">
          <label htmlFor="nombreGastoInput">Nombre Gasto</label>
          <input
            type="text"
            className="form-control"
            id="nombreGastoInput"
            aria-describedby="emailHelp"
            placeholder="Ej. Transporte"
            ref={this.nombreGasto}
          />
        </div>

        <div className="form-group">
          <label htmlFor="cantidadInput">Cantidad</label>
          <input
            type="text"
            className="form-control"
            id="cantidadInput"
            placeholder="Ej. 200"
            ref={this.cantidadGasto}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    );
  }
}

export default Formulario;
