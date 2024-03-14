import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login";
import AboutPage from "./pages/AboutPage";
// import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import { loader as todoLoader } from "./pages/ServicePage";
import MainNavigation from "./components/navbar/MainNavigation";
import PrivateRoute from "./route/PrivateRoute";
import Error from "./pages/Error";
import Register from "./components/register/Register";
import { lazy } from "react";
import TodoDetail from "./pages/TodoDetail";

const ServicePage = lazy(() => import("./pages/ServicePage"));

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: (
      <PrivateRoute>
        <MainNavigation />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "todo/:todoId",
        element: <TodoDetail />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "services",
        element: <ServicePage />,
        loader: todoLoader,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
