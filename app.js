import ReactDOM from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import TodoList from './src/pages/TodoList';

const parent = document.getElementById('root');

const root = ReactDOM.createRoot(parent);


const App = ()=>{
    const router = createBrowserRouter([
        {
            path:"/",
            element:<TodoList/>   
           }
    ])
   
    return(
        <RouterProvider router={router}/>
       
    )
}


root.render(<App/>);

export default App;

