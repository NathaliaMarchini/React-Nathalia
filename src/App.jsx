import { Header } from './components/header'
import { Contador } from './components/contador'
import { Lista } from './components/Lista'
import './App.css'


function App() {

  return (
    <>

    <Header title="Projeto React" subTitulo="Counter" />

    <main className="container">
      <h1>Conteúdo do projeto React</h1>
      
      <div>
        <a href="#">Vai para Contato</a>
      </div>

      <Contador />

      <Lista />



    </main>
    </>
  )
}

export default App
