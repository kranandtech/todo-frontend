import {useEffect, useState} from 'react';
const useGetTodo = () => {
  const [todo,setTodo] =useState({});
  const getTodo = async () => {
    try {
    const URL = "http://localhost:9000/api/v1/todo";
    const OPTIONS = {
      headers: {
        "content-type": "application/json",
        "method": "GET",
      },
    };
    const res = await fetch(URL, OPTIONS);
    const data = await res.json();
    setTodo(data);
    } catch (error) {
        console.error(error);
        
    }
  };
  useEffect(()=>{
     getTodo();
  },[]);
  return todo;
};
export default useGetTodo;
