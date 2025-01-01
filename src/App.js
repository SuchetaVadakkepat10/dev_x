import logo from './logo.svg';
import './App.css';

import { Route, Routes, Router } from 'react-router-dom';

import InstagramClone from './main-page/main-page';
import Login from './login-page/login-page';
import ScratchCard from './scratch-page/scratch-page';
import SignUp from './sign-up-page/sign-up';
import AboutAccount from './about-account/about-account';
import ProtectedRoute from './authentication/protecting-routes';

//------------------------------------------------------------------------------------------
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/about" element={<ProtectedRoute> <AboutAccount/> </ProtectedRoute>} />
      <Route path="/main" element={<ProtectedRoute> <InstagramClone/></ProtectedRoute>} />


    </Routes>

  );
}

export default App;