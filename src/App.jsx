import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useEffect } from "react";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import AOS from "aos";
import "aos/dist/aos.css";






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
        { path: 'plans', element: <Pricing /> },
  

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