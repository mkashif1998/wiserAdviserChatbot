import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './index.css';
import Router from './Routers';
import Navbar from './View/Component/Navbar';
import Footer from './View/Component/Footer';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Router />
      {location.pathname !== '/liveChat' && <Footer />}
    </>
  );
}

export default App;
