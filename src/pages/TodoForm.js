import {  useState } from "react";
import useCreateTodo from "../hooks/useCreateTodo";

const TodoForm = ()=>{
  const {createTodo} = useCreateTodo();
   const [title,setTitle] = useState("");
  
   const addElem = (e)=>{
    setTitle(e.target.value);
   }
  const addTodo = ()=>{
    createTodo({title})
    setTitle("");
  }

    return(
        <>
        <div>
           <input onChange={addElem} value={title}  type="text"  />
           <button onClick={addTodo}  >Add</button>
        </div>
        </>
    );
}

export default TodoForm;