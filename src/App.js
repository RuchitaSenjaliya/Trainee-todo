import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import { loader as todoLoader } from "./pages/ServicePage";
import MainNavigation from "./components/navbar/MainNavigation";
import PrivateRoute from "./route/PrivateRoute";
import Error from "./pages/Error";

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
        element: (
          // <PrivateRoute>
          <HomePage />
          // </PrivateRoute>
        ),
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <AboutPage />
          </PrivateRoute>
        ),
      },
      {
        path: "services",
        element: (
          <PrivateRoute>
            <ServicePage />
          </PrivateRoute>
        ),
        loader: todoLoader,
      },
      {
        path: "contact",
        element: (
          <PrivateRoute>
            <ContactPage />
          </PrivateRoute>
        ),
      },
    ],
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
