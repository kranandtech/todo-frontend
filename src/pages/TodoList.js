import { useEffect } from "react";
import useGetTodo from "../hooks/useGetTodo";

const TodoList = ()=>{
    const {data} = useGetTodo();
   // console.log(data);
    return(
        <div>
            {data.map((elem)=>{
                return(
                    <p key={elem._id}>{elem.title}</p>
                )
            })}
        </div>
          
        
    );
   
}

export default TodoList;