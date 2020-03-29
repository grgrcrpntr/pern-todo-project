import React, { Fragment, useState } from "react";

const InputTodo = () => {

    // State
    const [description, setDescrption] = useState("");

    // Create Todo
    const addTodo = async e => {
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Grégoire's Todo List</h1>
            <form className="d-flex mt-5" onSubmit={addTodo}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescrption(e.target.value)}
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
        
    )
}

export default InputTodo;