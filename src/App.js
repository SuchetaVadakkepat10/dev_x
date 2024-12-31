import logo from './logo.svg';
import './App.css';

import { Route, Routes, Router } from 'react-router-dom';

import InstagramClone from './main-page/main-page';
import Login from './login-page/login-page';
import ScratchCard from './scratch-page/scratch-page';


//------------------------------------------------------------------------------------------
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/main" element={<InstagramClone/>} />
      <Route path="/scratch-card" element={<ScratchCard/>} />
    </Routes>

  );
}

export default App;