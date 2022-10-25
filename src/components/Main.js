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

  handleEdit = (event, index) => {
    console.log('edit', index);
  };

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];

    newTasks.splice(index, 1);

    this.setState({
      tasks: [...newTasks],
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
          {tasks.map((task, index) => (
            <li className="Task" key={index}>
              {task}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(event) => this.handleEdit(event, index)}
                />
                <FaWindowClose
                  onClick={(event) => this.handleDelete(event, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
