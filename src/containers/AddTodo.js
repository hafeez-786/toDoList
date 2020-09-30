import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'


const AddTodo = ({ dispatch }) => {
  let input, date

  return (
    <>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = '' 
        
        dispatch(addTodo(date.value))
        date.value = ''
      }}>

        <div className="input-group mb-3 col-md-12 noPad">
          <input
            pattern="[a-zA-Z]+"
            type="text"
            className="form-control col-md-8 col-8"
            placeholder="Type task name here..."
            ref={node => input = node} />

          <input
            type="date"
            className="form-control col-md-4 col-4"
            ref={node => date = node}
          />

          <div className="input-group-append">
            <button type="submit" className="input-group-text btn">ADD</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default connect()(AddTodo)
