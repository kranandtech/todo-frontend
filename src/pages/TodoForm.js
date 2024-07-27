import { useEffect, useState } from "react";
import TodoList from "./TodoList";

const TodoForm = ()=>{
   const [todoElem,setTodoElem] = useState("");
   const [todo,setTodo] = useState([]);
  
   const addElem = (e)=>{
    setTodoElem(e.target.value);
   }
  const addTodo = ()=>{
    setTodo([...todo,todoElem]);
    setTodoElem("");
  }
  const removeTodo = (todoElem)=>{
    const newTodo = todo.filter((elem)=>{
        if(elem!== todoElem) return true;
        return false;
        
    });
    setTodo(newTodo);
  }

  

  useEffect(() => {
  
    console.log("get item");
    const storedTodos = JSON.parse(localStorage.getItem("TodoList"));
    if (storedTodos) {
      setTodo(storedTodos);
      
    }
    
  },[]);
  
  useEffect(() => {
    console.log("set item");
    localStorage.setItem('TodoList',JSON.stringify(todo))
   }, [todo]);
  

    return(
        <>
        <div>
           <input onChange={addElem} value={todoElem}  type="text"  />
           <button onClick={addTodo}  >Add</button>
        </div>
        <TodoList todo={todo} removeTodo={removeTodo}/>
        </>
    );
}

export default TodoForm;