<<<<<<< HEAD
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div >
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/admin">Admin Panel</Link>
        </div>
    )
=======
import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <h1>Header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia rerum nam totam dolor inventore, dolore suscipit aliquam eaque commodi similique atque fugit sint aspernatur accusantium blanditiis labore voluptas eius facere.</p>
    </div>
  )
>>>>>>> bcb3c7e4da17d1f7fbd756d4cf588853e27cf8a7
}