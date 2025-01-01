import logo from './logo.svg';
import './App.css';

import { Route, Routes, Router } from 'react-router-dom';

import InstagramClone from './main-page/main-page';
import Login from './login-page/login-page';
import ScratchCard from './scratch-page/scratch-page';
import SignUp from './sign-up-page/sign-up';
import BookingPage from './bookings-page/booking-page.js';


//------------------------------------------------------------------------------------------
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<InstagramClone/>} />
      <Route path="/scratch-card" element={<ScratchCard/>} />
      <Route path="/bookings-page" element={<BookingPage/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>

  );
}

export default App;