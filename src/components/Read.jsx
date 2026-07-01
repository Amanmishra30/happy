import {Fragement } from "react";

const Read =(props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const DeleteHandler = (id) => {

     const filtedtodo =   todos.filter((todo) => todo.id != id);
     settodos(filtedtodo);
    };
    const resertodos = todos.map((todo) =>{
        return (
            <li key = {todo.id}>
                {todo.title} | { " "}
                <span onClick={() => DeleteHandler(todo.id)} >Delete</span>
            </li>
        );
    });

    // const DeleteHandler = (id)=> {
    //     const filtertodo = todos.filter (( todo) => todo.id != id);
    //     settodos (filtertodo);
    // };

    return (
        <Fragment>
            <h1 style ={{ color:"toato"}}>Pending Todos </h1>
            <ol>{rendertodos}</ol>
        </Fragment>
    );
}

export default Read;