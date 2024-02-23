import "./App.css";
import About from "./components/about/About";
import Home from "./components/home/Home";

import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";

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

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
    </>
  );
}

export default App;
