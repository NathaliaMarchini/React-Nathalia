import { Header } from './components/header'
import './App.css'

function App() {

  return (
    <>

    <Header title="Projeto React" subTitulo="Sub titulo" />

    <main className="container">
      <h1>Conteúdo do projeto React</h1>
      
      <div>
        <a href="#">Vai para Contato</a>
      </div>

      <div className="contador">
        
      </div>
    </main>
    </>
  )
}

export default App
