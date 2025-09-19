import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import AdminPanel from './pages/adminPanel'
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/*" element={<AdminPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App