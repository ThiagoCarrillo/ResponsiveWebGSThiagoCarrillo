import { Link } from "react-router-dom";
import './Navbar.css'

export default function Navbar() {

  return (
    <>
    <div className='navbar'>
      <Link to="/"><img src="../../img/logo.png" alt="" /></Link>
      <ul>
        <Link to="/plastico"><li>Características da Marine Cycle</li></Link>
        <Link to="/pontos"><li>Sistema de Pontos</li></Link>
        <Link to="/login"><li>Login</li></Link>
      </ul>
    </div>
      
    </>
  )
}