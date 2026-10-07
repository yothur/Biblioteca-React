import {useState} from "react";

const LivroCard = () => {

    const [buscar, setBusca] = useState("")
    const [buscarCategoria, setBuscarCategoria] = useState("")

    const handleBuscar = (e) => {
        setBusca(e.target.value)
    }

    const handleCategoria = (e) => {
        setBuscarCategoria(e.target.value)
    }


    const [livros, setLivros] = useState(JSON.parse(localStorage.getItem("livros")) || []);

    const handleEmprestar = (id) => {
        const livrosAtualizados = [];
        for (let i = 0; i < livros.length; i++) {
            if (livros[i].id === id) {
                livros[i].emprestado = true;
            }
            livrosAtualizados.push(livros[i]);
        }
        localStorage.setItem(
            "livros", JSON.stringify(livros)
                );
                setLivros(livrosAtualizados);
            };

    const handleDevolver = (id) => {
        const livrosAtualizados = []
        for (let i = 0; i < livros.length; i++) {
            if (livros[i].id === id) {
                livros[i].emprestado = false;
            }
            livrosAtualizados.push(livros[i]);
        }
        localStorage.setItem(
            "livros", JSON.stringify(livros)
                );
                setLivros(livrosAtualizados);
            };


    const livrosFiltrados = livros.filter((livros) => (livros.autor.toLowerCase().includes(buscar.toLowerCase()) ||
        livros.titulo.toLowerCase().includes(buscar.toLowerCase())
    ));

    const livrosFiltradosCategorias = livros.filter((livros) => (livros.categoria.includes(buscarCategoria)));

    return <div className="container">
        <div className="filtro-categoria">
            <label htmlFor="pesquisar">Pesquisar: </label>
            <input
                placeholder="Pesquisar livro"
                type="text"
                id="pesquisar"
                name="pesquisar"
                value={buscar}
                onChange={handleBuscar}
            />
        </div>

        <div className="livros">
            {livrosFiltrados.map((livro, index) => (
                <div className="livro-card" key={index}>
                    <h2>{livro.titulo}</h2>
                    <p>Autor: {livro.autor}</p>
                    <p>Categoria: {livro.categoria}</p>
                    <p className={livro.emprestado ? "status status-emprestado" : "status status-disponivel"}>
                        {livro.emprestado ? "Emprestado" : "Disponível"}
                    </p>

                    {livro.emprestado ? (
                        <button type="button" className="botao-devolver" onClick={() => handleDevolver(livro.id)}>
                            Devolver
                        </button>
                    ) : (
                        <button type="button" className="botao-emprestar" onClick={() => handleEmprestar(livro.id)}>
                            Emprestar
                        </button>
                    )}
                </div>
            ))}
        </div>

        <div className="filtro-categoria">
            <select name="buscarCategoeria"
            id="buscarCategoria"
            value={buscarCategoria}
            onChange={handleCategoria}
            >
            <option value={""}>Selecione uma categoria</option>
            <option value={"Ficção"}>Ficção</option>
            <option value={"Aventura"}>Aventura</option>
            <option value={"Romance"}>Romance</option>
            <option value={"Manga"}>Manga</option>
            <option value={"Manhwa"}>Manhwa</option>
            <option value={"Terror"}>Terror</option>
            </select>
        </div>

        <div className="livros">
            {livrosFiltradosCategorias.map((livro, index) => (
                <div className="livro-card" key={index}>
                    <h2>{livro.titulo}</h2>
                    <p>Autor: {livro.autor}</p>
                    <p>Categoria: {livro.categoria}</p>
                    <p className={livro.emprestado ? "status status-emprestado" : "status status-disponivel"}>
                        {livro.emprestado ? "Emprestado" : "Disponível"}
                    </p>

                    {livro.emprestado ? (
                        <button type="button" className="botao-devolver" onClick={() => handleDevolver(livro.id)}>
                            Devolver
                        </button>
                    ) : (
                        <button type="button" className="botao-emprestar" onClick={() => handleEmprestar(livro.id)}>
                            Emprestar
                        </button>
                    )}
                </div>
            ))}
        </div>

    </div>
}

export default LivroCard;