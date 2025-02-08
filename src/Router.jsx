import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import Form from "./components/Form";
import Home from "./Components/Home";

const Router = () => {
    const router = createBrowserRouter([
    {
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/signup",
          element: <Form/>
        }
      ]
    }
  ])
  return <RouterProvider router={router}/>
}

  export default Router