
export const TodoItem = ({todo, onDeleteTodo, onToggleTodo} ) => {
  return (
    <>
      <li  className="list-group-item d-flex justify-content-between">
                    <span onClick={() => onToggleTodo(todo.id)}
                    className={`aling-self-center ${(todo.done) ? 'text-decoration-line-through':''}`} >{todo.description} </span>
                    <button 
                    className="btn btn-danger" 
                    onClick={() => onDeleteTodo( todo.id )}>borrar</button>
                </li>
    </>
  )
}


