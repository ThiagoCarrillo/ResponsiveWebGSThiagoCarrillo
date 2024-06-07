import { Link } from "react-router-dom";
import './Login.css'

export default function Login(){
    return (
        <div className="div-login">
          <form>
            <h2>Login</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button type="submit">Entrar</button>
            <br></br>
            <Link to='../cadastro'><button>Cadastre-se</button></Link>
          </form>
        </div>
      );
    };
