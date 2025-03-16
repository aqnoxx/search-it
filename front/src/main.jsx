import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import ReactDOM from "react-dom/client"
import AboutUs from './pages/AboutUs/AboutUs.jsx'
import Profile from './pages/Profile/Profile.jsx'
import Auth from './pages/Auth/Auth.jsx'


const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="auth" element={<Auth />} />
      <Route path="about_us" element={<AboutUs />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  </BrowserRouter>  
);
