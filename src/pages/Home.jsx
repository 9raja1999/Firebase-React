import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem } from '../store/slices/todo.slice'


function Home() {
  const { todos } = useSelector((state) => state.todo)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target)


    dispatch(addItem({title : formData.get('todo')}))

  }


  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type="text" name='todo' />
        <button type='submit'>ADD TODO</button>
      </form>

      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              {todo.title}
              <button onClick={() => {
                dispatch(removeItem({ id: todo.id }))
              }}>X</button>
              <button onClick={() => {
                
              }}>Edit</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Home