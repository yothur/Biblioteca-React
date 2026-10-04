import {useState} from "react";

const LivroCard = () => {

    const [buscar, setBusca] = useState("")
    const handleBuscar = (e) => {
        setBusca(e.target.value)
    }

    const [livros] = useState(JSON.parse(localStorage.getItem("livros")) || []);

    const livrosFiltrados = livros.filter((livros) => (livros.autor.toLowerCase().includes(buscar.toLowerCase()) ||
        livros.titulo.toLowerCase().includes(buscar.toLowerCase())
    ));

    return <div>
        <label htmlFor="pesquisar">Pesquisar: </label>
        <input
            placeholder="Pesquisar livro"
            type="text"
            id="pesquisar"
            name="pesquisar"
            value={buscar}
            onChange={handleBuscar}
        />
        {livrosFiltrados.map((livro, index) => (
            <div key={index}>
                <h2>{livro.titulo}</h2>
                <p>Autor: {livro.autor}</p>
            </div>
        ))}
    </div>
}

export default LivroCard;