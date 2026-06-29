import  { useState } from 'react'
import { useFormState } from 'react-dom'

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: " kaam ho raha hai  bhau" , iscompleted: false},
  ])

  const [title, settitle] = useState(second);
  return (
    <div>
      <h1> create data </h1>
      <form >
<input 
onChange={(e) => 
  settitle (e.target.value)
}
type ="text"
placeholder="title"/>


<br/>
<br/>

        <input type = "text" placeHolder="title"/>
        <br/>
        <input
         onChange ={(e) => console.log(e.target.checked)}
        
         type = "checkBox"  /> completed 
        <br/><br/>
        <button >Create  Todo </button>
      </form>
    </div>
  )
}

export default App
