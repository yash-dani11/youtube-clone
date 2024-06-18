import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Homepage from "./components/Homepage";
import Player from "./components/Player";
import { Provider } from "react-redux";
import store from "./redux/store";

const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body></Body>,
  children:[{
    path:"/",
    element:<Homepage></Homepage>
  },
  {
    path:"/watch/:id",
    element:<Player></Player>
  }
]
}])

function App() {
  return (
    <Provider store={store}><RouterProvider router={appRouter}></RouterProvider></Provider>
  );
}

export default App;
