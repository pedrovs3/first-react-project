import React from 'react';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tasks.css';
import PropTypes from 'prop-types';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="Tasks">
      {tasks.map((task, index) => (
        <li className="Task" key={index}>
          {task}
          <span>
            <FaEdit
              className="edit"
              onClick={(event) => handleEdit(event, index)}
            />
            <FaWindowClose
              onClick={(event) => handleDelete(event, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
