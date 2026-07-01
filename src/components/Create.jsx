 import React from 'react'
 
 const Create = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");

    const SubmitHandler =(e) => {
        e.preventDefault();

        const newtode ={
            id : nanoid(),
            title: title,
            isComplete :false,
        };

        let copytodos = [...todos];
        copytodos.push(newtodo);
        settodos(copytodos);


        settitle("");
    };

//     const buttoncss = {
//  color: "white",
//  padding: "5px 10px",
//  backgroundColor: "transparent",
//  border: "1px solid white",
//  borderRadious: "Epx"

//     };
   return (
    <div className = " border w-[70px]">
        <h1> Create Tasks</h1>
        <form onSubmit = { SubmitHandler}>
            <input 
            onChange ={(e) => settitle(e.target.value)}
            value = {title} 
            type = " text "
            placeholder = "title"
            />
            <br/>
            <br/>
        </form>
    </div>
   )
 }
 
 export default Create
 