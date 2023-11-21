import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import Signup from './pages/Signup';
import UserProfile from './pages/UserProfile';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PrivateRoutes from './pages/PrivateRoutes';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/userprofile" element={<UserProfile />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
