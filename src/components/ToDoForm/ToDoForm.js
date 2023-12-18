import { useState } from "react";
import "./ToDoForm.css";
import { useDispatch, useSelector } from 'react-redux'
import { Todoselector, actions } from "../../redux/reducer";
import { actionns, notificationSelector } from "../../redux/notificationreducer";

function ToDoForm() {
  const [todoText, setTodoText] = useState("");
  const dispatch=useDispatch();
  const todos=useSelector(Todoselector);
  const messages=useSelector(notificationSelector)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.add(todoText));
    setTodoText("");
    setTimeout(() => {
      dispatch(actionns.reset());
      
    }, 3000);
  };

  return (
    <div className="container">
      <div className="alert alert-success" role="alert">
        {messages}
  
</div>
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
