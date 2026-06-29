import  { useState } from 'react'
import {nanoid} from "nanoid";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: " kaam ho raha hai  bhau" , iscompleted: false},
  ])

  const [title, settitle] = useState("");
    
 const SubmitHandler = (e) => {
  e.preventDefault();

  const newtodo = {
    id: nanoid(),
    title: title,
    isComplete:false,
  };

  let copytodos = [...todos];
  copytodos.push(newtodo);
  settodos(copytodos);
 }

 settitle("");
};


const rendertodos = todos.map((todo) => {
  return <li key ={todo.id}>{todo.title}</li>
})

return (

  <div>

    <h1>Create Tasks</h1>
    <form onSubmit = {submitHandler}>
      <input onChange = {(e) => settitle(e.target.value)}
        value= {title}
        type="text"
        placeholder="title"/>
     <br/>
     <br/>
     <button>create todo</button>
    </form>
    <hr/>
    <h1> pending todos</h1>
    <ol> {rendertodos}</ol>
  </div>

);

export default App;
