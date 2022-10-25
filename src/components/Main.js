import React, { Component } from 'react';
import './Main.css';

// Form
// Tarefas
import { FaEdit, FaPlus, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: ['Fazer Café', 'Beber Agua', 'Estudar'],
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="Main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="Form">
          <input onChange={this.handleChange} type="text" value={newTask} />
          <button type="submit">{<FaPlus />}</button>
        </form>

        <ul className="Tasks">
          {tasks.map((task, number) => (
            <li className="Task" key={number}>
              {task}
              <div>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
