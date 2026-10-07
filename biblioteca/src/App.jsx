import './App.css'
import { useState } from 'react'
import Livro from './components/Livro'
import LivroCard from "./components/LivroCard.jsx";

function App() {
  const [pagina, setPagina] = useState("livros")

  return (
    <div className="app">
      <header className="header">
        <h1>Biblioteca</h1>
        <nav className="menu">
          <button type="button" onClick={() => setPagina("livros")}>Livros</button>
          <button type="button" className="botao-cadastrar" onClick={() => setPagina("cadastro")}>Cadastrar livro</button>
        </nav>
      </header>

      {pagina === "livros" ? <LivroCard /> : <Livro />}
    </div>
  )
}

export default App