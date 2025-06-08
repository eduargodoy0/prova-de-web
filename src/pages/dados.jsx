import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Dados() {
  const { id } = useParams(); // pega o id da url
  const [post, setPost] = useState(null); // armazena o post

  // quando a página abrir, busca os dados do post pelo id
  useEffect(() => {
    function getApi() {
      // faz a requisição GET
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }

    getApi(); // chama a função quando carrega a página
  }, [id]);

  // se ainda não carregou, mostra essa mensagem
  if (!post) 
    return <p>Carregando</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default Dados;
