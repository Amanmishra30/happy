// import  { useState } from 'react'
// import {nanoid} from "nanoid";

// const App = () => {
//   const [todos, settodos] = useState([
//     { id: 1, title: " kaam ho raha hai  bhau" , iscompleted: false},
//   ])

//   const [title, settitle] = useState("");
    
//  const SubmitHandler = (e) => {
//   e.preventDefault();

//   const newtodo = {
//     id: nanoid(),
//     title: title,
//     isComplete:false,
//   };

//   let copytodos = [...todos];
//   copytodos.push(newtodo);
//   settodos(copytodos);
//  }

//  settitle("");
// };


// const rendertodos = todos.map((todo) => {
//   return <li key ={todo.id}>{todo.title}</li>
// })

// return (

//   <div>

//     <h1>Create Tasks</h1>
//     <form onSubmit = {submitHandler}>
//       <input onChange = {(e) => settitle(e.target.value)}
//         value= {title}
//         type="text"
//         placeholder="title"/>
//      <br/>
//      <br/>
//      <button>create todo</button>
//     </form>
//     <hr/>
//     <h1> pending todos</h1>
//     <ol> {rendertodos}</ol>
//   </div>

// );


import {useState} from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App =() => {
  const [todos,settodos] = useState([
    {id: 1, title: "kaam jaruri hai", iscomplete: false},

  ])

  return (
    <div className =" flex w-screen h-screen bg-zinc-600  p-10">
      <create todos= {todos} settodos={settodos}/>
      <Read todos= {todos} settodos={settodos}/>
    </div>
  )
}

export default App;
