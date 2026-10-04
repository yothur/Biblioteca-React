import { useState } from "react"

const Livro = () => {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");
    const [categoria, setCategoria] = useState("");
    const [ano, setAno] = useState("");
    const [mensagem, setMensagem] = useState("")

    const handleSalvar = (e) => {
        e.preventDefault();
        const novoLivro = {
            titulo : titulo,
            autor : autor,
            categoria : categoria,
            ano : ano
        };

        const livrosSalvos = JSON.parse(localStorage.getItem("livros")) || [];
        livrosSalvos.push(novoLivro)
        localStorage.setItem("livros", JSON.stringify(livrosSalvos))
        
        setMensagem("Livro cadastrado com sucesso");
        
        setTitulo("");
        setAutor("");
        setAno("");

        setTimeout(() => {
            setMensagem("")

        }, 2000);
    } 


    const handleTrocarTitulo = (e) => {
        setTitulo(e.target.value);
    }
    
    const handleTrocarAutor = (e) => {
        setAutor(e.target.value)
    }

    const handleTrocarCategoria = (e) => {
        setCategoria(e.target.value)
    }

    const handleTrocarAno = (e) => {
        setAno(e.target.value)
    }
    
    return <form onSubmit={handleSalvar}>
        <label htmlFor="titulo">Titulo</label>
        <input value={titulo} onChange={handleTrocarTitulo} type="text" name="titulo" id="titulo" placeholder="Digite o titulo: "/>

        <label htmlFor="autor">Autor</label>
        <input value={autor} onChange={handleTrocarAutor} type="text" name="autor" id="autor" placeholder="Digite o autor: "/>

        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" id="categoria" value={categoria} onChange={handleTrocarCategoria}>
            <option value={""}>Selecione uma categoria</option>
            <option value={"Ficção"}>Ficção</option>
            <option value={"Aventura"}>Aventura</option>
            <option value={"Romance"}>Romance</option>
            <option value={"Manga"}>Manga</option>
            <option value={"Manhwa"}>Manhwa</option>
            <option value={"Terror"}>Terror</option>
        </select>

        <label htmlFor="ano">Ano</label>
        <input value={ano} onChange={handleTrocarAno} type="text" name="ano" id="ano" placeholder="Digite o ano: "/>

        <button type="submit">
            Cadastrar livro
        </button>
        {mensagem && <p>{mensagem}</p>}
    </form>
    
}

export default Livro