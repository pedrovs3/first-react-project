import React, { Component } from 'react';
import './Main.css';

// Form
// Tarefas
import { FaEdit, FaPlus, FaWindowClose } from 'react-icons/fa';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
  };

  handleChange = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if (newTask === '') return;
    if (tasks.includes(newTask)) return;

    const newTasks = [...tasks];

    this.setState({
      tasks: [...newTasks, newTask],
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="Main">
        <h1>Lista de tarefas</h1>

        <form action="#" className="Form" onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={newTask} />
          <button type="submit">{<FaPlus />}</button>
        </form>

        <ul className="Tasks">
          {tasks.map((task, number) => (
            <li className="Task" key={number}>
              {task}
              <span>
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
