import { Link } from "react-router-dom";
import './Cadastro.css' 

export default function Cadastro(){
    return (
        <form className="cadastro-form">
            <h2>Cadastre-se</h2>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
            <Link to='../login'><button type="submit">Cadastrar</button></Link>
        </form>
      );
    }; 
