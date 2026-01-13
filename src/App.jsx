import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';


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
      { path: '/about', element: <About /> },
  

    ],
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;