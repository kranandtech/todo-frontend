import {useEffect, useState} from 'react';
const useGetTodo = () => {
  const [todo,setTodo] =useState([]);
  const getTodo = async () => {
    try {
    const URL = "http://localhost:9000/api/v1/todo";
    const OPTIONS = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        
      },
    };
    const res = await fetch(URL, OPTIONS);
    const data = await res.json();
    console.log("hook",data.data);
    setTodo(data.data);
    } catch (error) {
        console.error(error);
        
    }
  };
  useEffect(()=>{
     getTodo();
  },[]);
  return {todo,getTodo};
};
export default useGetTodo;
