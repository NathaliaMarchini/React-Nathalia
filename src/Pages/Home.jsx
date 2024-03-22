import { Link } from "react-router-dom";
import { Banner } from "../components/Banner";
import { Lista } from "../components/Lista";
import { CadastroNews } from "../components/cadastroNews";
import { Contador } from "../components/contador";

export function Home() {
    return (
        <main className="container">
        <h1>Conteúdo do projeto React</h1>
        
        <div>
          <Link to="/Contato">Vai para contato</Link>
        </div>
  
        <Contador />
  
        <Lista />
  
        <Banner />
  
        <CadastroNews />
  
      </main>
    )
}