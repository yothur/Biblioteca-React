import {useState} from "react";

const LivroCard = () => {
    const [livros] = useState(JSON.parse(localStorage.getItem("livros")) || []);

    return <div>
        {livros.map((livro, index) => (
            <div key={index}>
                <h2>{livro.titulo}</h2>
                <p>Autor: {livro.autor}</p>
            </div>
        ))}
    </div>
}

export default LivroCard;