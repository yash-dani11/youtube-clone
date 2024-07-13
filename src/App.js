import { lazy,Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Homepage from "./components/Homepage";
import { Provider } from "react-redux";
import store from "./redux/store";
const Player = lazy(()=>import("./components/Player"));
const Search  =lazy(()=>import("./components/SearchPage/Search"));
const appRouter = createBrowserRouter([{
  path:"/",
  element:<Body></Body>,
  children:[{
    path:"/",
    element:<Homepage></Homepage>
  },
  {
    path:"/watch/",
    element:<Suspense><Player></Player></Suspense>
  },
  {path:"/results",
  element:<Suspense><Search></Search></Suspense>
}
]
}])

function App() {
  return (
    <Provider store={store}><RouterProvider router={appRouter}></RouterProvider></Provider>
  );
}

export default App;
