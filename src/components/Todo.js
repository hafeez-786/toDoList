import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeUser } from '../actions/index'


const Todo = ({ onClick, completed, text, id }) => {
  const dispatch = useDispatch();

  return (
    <>
      <li className="mb-2">
        <div className="row">
          <div className="col-md-10 col-10"
            onClick={onClick}
            style={{
              textDecoration: completed ? 'line-through' : 'none'
            }}
          >
            <span className="lineThroughText-outer">
              {text}
            </span>
          </div>
          <div className="col-md-1 col-1 Icons-block padLeft">
            <span><i className="fas fa-edit" /></span>
          </div>
          <div className="col-md-1 col-1 Icons-block padLeft">
            <span>
              <i className="fas fa-trash-alt"
                onClick={() => dispatch(removeUser(id))}
              />
            </span>
          </div>
        </div>
      </li>
    </>
  )
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
