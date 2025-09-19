<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/header'
import { Route, Routes } from 'react-router-dom'
import AdminPanel from './pages/adminPanel'
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';
=======
import './App.css'
import Header from './components/header'
import ProductCard from './components/prductCard'
import UserData from './components/userData'
>>>>>>> bcb3c7e4da17d1f7fbd756d4cf588853e27cf8a7

function App() {

  return (
<<<<<<< HEAD
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
=======
    <>
      <Header />
      <UserData />
      <ProductCard />
    </>
>>>>>>> bcb3c7e4da17d1f7fbd756d4cf588853e27cf8a7
  )
}
export default App