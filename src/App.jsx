import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useEffect } from "react";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';

import AOS from "aos";
import "aos/dist/aos.css";
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';


// Layout component
const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">

      <Navbar />
      <Outlet /> {/* Child routes render here */}
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'plans', element: <Pricing /> },
      { path: 'contact', element: <Contact /> },

    ],
  },

]);


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return <RouterProvider router={router} />;
}

export default App;