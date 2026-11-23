import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/LoginContext.jsx';
import Header from './components/LandingPage/Header.jsx';
import Footer from './components/LandingPage/Footer.jsx';
import Home from './components/LandingPage/Home.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';

function App() {
  return (
    <div>
      <AuthProvider>
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1 d-flex flex-column">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='registration' element={<Registration />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
