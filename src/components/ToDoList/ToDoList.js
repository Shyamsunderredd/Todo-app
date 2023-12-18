import "./ToDoList.css";
import { useDispatch ,useSelector} from "react-redux";
import { Todoselector, actions } from "../../redux/reducer";

function ToDoList() {
  const dispatch=useDispatch();
  const todos=useSelector(Todoselector);
  
  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(actions.toggle(index))}}
          >Toggle</button>
          <button className="btn btn-warning"
          onClick={()=>{dispatch(actions.delete(index))}}
          >Delete</button>

          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
