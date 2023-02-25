import "./App.scss";
import Header from "./components/header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/login",
                    element: <Login />,
                }
            ]
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />{" "}
        </div>
    );
}

export default App;
