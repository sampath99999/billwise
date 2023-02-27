import "./App.scss";
import Header from "./components/header";
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { Toaster } from "react-hot-toast";
import { verify } from "./api/auth";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./pages/dashboard";

function App() {
    verify();
    const loggedIn = useSelector((state) => state.user.loggedIn);
    const authLoader = () => {
        if (!loggedIn) {
            return redirect("/");
        }
        return null;
    };
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/login",
                    element: <Login />,
                    loader: () => {
                        if (loggedIn) {
                            return redirect("/");
                        }
                        return null;
                    },
                },
            ],
        },
        {
            path: "/dashboard",
            element: <Dashboard />,
            loader: authLoader,
        },
    ]);
    return (
        <div className="App">
            <div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
            <RouterProvider router={router} />{" "}
        </div>
    );
}

export default App;
