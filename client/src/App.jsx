import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { Button } from "./components/ui/button";
import Login from "./pages/Login";
import HeroSection from "./pages/student/HeroSection";
import MainLayout from "./layout/MainLayout";
import { RouterProvider } from "react-router";
import Courses from "./pages/student/Courses";
import MyLearning from "./pages/student/MyLearning";
import Profile from "./pages/student/Profile";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />,
            <Courses/>
          </>
        ),
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "MyLearning",
        element: <MyLearning/>,
      },
      {
        path: "Profile",
        element: <Profile/>,
      },
    ],
  },
]);

function App() {
  return (
    <main>

      <RouterProvider router={appRouter} />
    </main>
  );
}

export default App;
