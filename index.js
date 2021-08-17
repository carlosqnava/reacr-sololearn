import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Counter extends React.Component {
  state = {
    nombre: '',
    contra: ''
  };
  increment = () => {
    this.setState({ nombre: this.state.nombre, contra: this.state.contra });
  };
  render() {
    return (
      <div>
        <div id="login">
          <p>nombre</p>
          <input type="text" name="nombre" />
          <p>contra</p>
          <input type="text" name="contra" />
          <br />
          <button onClick={this.setState.nombre = 'a'}>Ingresar</button>
        </div>

        <div>
          <p>{this.state.nombre}</p>
          <p>{this.state.contra}</p>
        </div>
      </div>
    );
  }
}

const el = <Counter />;
ReactDOM.render(el, document.getElementById('root'));
