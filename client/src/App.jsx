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

function App() {
    verify();
    const loggedIn = useSelector((state) => state.user.loggedIn);
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
