import {Fragement } from "react";
import { toast } from "react-toastify";

const Read =(props) => {
    const todos = props.todos;
    const setTodos = props.setTodos;

    const DeleteHandler = (id) => {

     const filtedTodo =   todos.filter((todo) => todo.id !== id);
     settodos(filteredTodo);
     toast.error("todo deleted!")
    };
    const resertodos = todos.map((todo) =>{
        return (
            <li  
            key = {todo.id}
             className=" mb-2 flex justify-between items-center p-4 bg-gray-900 rounder">
               <span className="text-xl font-thin" >{todo.title} </span>
                <button  
                classname=" text-sm font-thin text-red-500"
                onClick={() => DeleteHandler(todo.id)} >
                Delete</button>
            </li>
        );
    });

    // const DeleteHandler = (id)=> {
    //     const filtertodo = todos.filter (( todo) => todo.id != id);
    //     settodos (filtertodo);
    // };

    return (
        <div className="w-[20%] p-10">
            <h1 className="mb-10 text-5xl font-thin">
            <span className="text-red-300">Pending </span>Todos </h1>
            <ol>{rendertodos}</ol>
        </div>
    );
}

export default Read;