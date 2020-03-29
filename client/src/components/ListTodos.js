import React, { Fragment, useEffect, useState } from "react";

// Nested components
import EditTodo from "./EditTodo";


const ListTodos = () => {

    // State
    const [todos, setTodos] = useState([]);

    // Delete function
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE",
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.log(err.message);
        }
    }

    // list all todos function
    const getTodos = async () => {
        try {
            const response = await fetch("http://localhost:5000/todos");
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.log(err.message);
        }
    }

    // Fill state
    useEffect(() => {
        getTodos();
    }, []);

    return <Fragment>
        <table className="table table-striped mt-5 text-center">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos.map(todo => (
                    <tr key={todo.todo_id}>
                        <td>{todo.description}</td>
                        <td><EditTodo todo={todo} /></td>
                        <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
  </table>
    </Fragment>

};

export default ListTodos;