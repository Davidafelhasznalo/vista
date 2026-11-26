import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/LoginContext.jsx';
import Header from './components/LandingPage/Header.jsx';
import Footer from './components/LandingPage/Footer.jsx';
import Home from './components/LandingPage/Home.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';
import Vehicles from './components/Vehicles/Vehicles.jsx';

function App() {
  return (
    <div>
      <AuthProvider>
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex flex-1 flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='registration' element={<Registration />} />
              <Route path='vehicles' element={<Vehicles />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
