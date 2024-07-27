const useCreateTodo = () => {
  const createTodo = async ({ title }) => {
    try {
      const URL = "http://localhost:9000/api/v1/todo";
      const OPTIONS = {
        method: "POST",
        body: JSON.stringify({ title }),
        headers: {
          "content-type": "application/json",
        },
      };
      const res = await fetch(URL, OPTIONS);
      const data = await res.json();
      if (data.status === "success") {
        console.log("done");
      } else {
        console.log("error in data fect");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { createTodo };
};

export default useCreateTodo;
