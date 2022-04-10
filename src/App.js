import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login/index.js';
import Register from './components/register/register.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/accountOpening" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
