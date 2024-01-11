import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login";
import AboutPage from "./pages/AboutPage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import { loader as todoLoader } from "./pages/ServicePage";
import MainNavigation from "./components/navbar/MainNavigation";

const user = localStorage.getItem("user");
const privateRoute = user ? (
  <MainNavigation>
    <HomePage />
  </MainNavigation>
) : (
  <Navigate to="/login" />
);

const router = createBrowserRouter([
  {
    path: "/",
    element: privateRoute,
    children: [
      {
        index: true,
        element: (
          <MainNavigation>
            <HomePage />
          </MainNavigation>
        ),
      },
      {
        path: "/about",
        element: (
          <MainNavigation>
            <AboutPage />
          </MainNavigation>
        ),
      },
      {
        path: "/services",
        element: (
          <MainNavigation>
            <ServicePage />
          </MainNavigation>
        ),
        loader: todoLoader,
      },
      {
        path: "/contact",
        element: (
          <MainNavigation>
            <ContactPage />
          </MainNavigation>
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
