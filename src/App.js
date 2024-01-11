import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";

const user = localStorage.getItem("user");
const privateRoute = user ? <HomePage /> : <Login />;

const router = createBrowserRouter([
  {
    path: "/",
    element: privateRoute,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <ServicePage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
