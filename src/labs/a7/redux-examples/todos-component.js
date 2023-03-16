import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";
const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''});
    const dispatch = useDispatch();
    const toggleTodoDone = (todo) => {
        dispatch(todoDoneToggle(todo))
    }

    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }
    return(
        <div>

            <h3>Todos</h3>

            <ul className="list-group">
                <>
                    <input onChange={todoChangeHandler} value={todo.do} className="form-control w-75"/>
                    <button onClick={createTodoClickHandler} className="btn btn-primary w-25 float-end">Create</button>

                </>

                {
                    todos.map((todo, index) =>
                        <li className="list-group-item">
                            <button onClick={() =>
                                deleteTodoClickHandler(index)}
                                    className="btn btn-danger
                      float-end ms-2">
                                Delete
                            </button>
                            <input type="checkbox"
                                   checked={todo.done}
                                   onChange={() =>
                                       toggleTodoDone(todo)}
                                   className="me-2"/>
                            {todo.do}
                        </li>
                    )
                }


            </ul>
        </div>

    )
    };
export default Todos;