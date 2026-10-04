import './App.css'
import Livro from './components/Livro'
import LivroCard from "./components/LivroCard.jsx";
import {useState} from "react";

function App() {
  return (
    <>
      <Livro></Livro>
        <br/>
        <LivroCard></LivroCard>
    </>
  )
}

export default App
