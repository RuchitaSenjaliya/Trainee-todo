import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RootLayout from "./pages/RootLayout";

// add routing
// Create routes for home, about and service page (Link, NavLink)
// logic for completed task

// const router = createBrowserRouter([
//   {
//     path: "/",
//     errorElement: <Error />,
//     element: (
//       <PrivateRoute>
//         <MainNavigation />
//       </PrivateRoute>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "about",
//         element: <AboutPage />,
//       },
//       {
//         path: "services",
//         element: <ServicePage />,
//         loader: todoLoader,
//       },
//       {
//         path: "contact",
//         element: <ContactPage />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
