import React, { Component } from 'react';
import './Main.css';

// Form
import { FaPlus } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
  };

  handleChange = (event) => {
    this.setState({
      novaTarefa: event.target.value,
    });
  };

  render() {
    const { novaTarefa } = this.state;

    return (
      <div className="Main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="Form">
          <input onChange={this.handleChange} type="text" value={novaTarefa} />
          <button type="submit">{<FaPlus />}</button>
        </form>
      </div>
    );
  }
}
