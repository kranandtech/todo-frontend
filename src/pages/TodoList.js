import useGetTodo from "../hooks/useGetTodo";
import TodoForm from "./TodoForm";

const TodoList = ()=>{
    const data = useGetTodo();
    return(
        <div>
            <TodoForm/>
            {data.map((elem)=>{
                return(
                    <p key={elem._id}>{elem.title}</p>
                )
            })}
        </div>
          
        
    );
   
}

export default TodoList;