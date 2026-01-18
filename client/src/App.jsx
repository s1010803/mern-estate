import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "sign-in", Component: SignIn },
      { path: "sign-up", Component: SignUp },
      { path: "about", Component: About },
      { path: "profile", Component: Profile },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
