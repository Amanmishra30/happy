

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
