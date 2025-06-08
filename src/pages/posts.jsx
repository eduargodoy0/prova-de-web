import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Posts() {
  const [post, setPost] = useState([]); // armazena o post
  const navigate = useNavigate(); // hook de navegação

  // quando a página abrir, busca os dados do post
  useEffect(() => {
    function getApi() {
      // faz a requisição GET
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data));
    }

    getApi(); // chama a função quando carrega a página
  }, []);

  const handleClick = (id) => {
    navigate(`/dados/${id}`); // vai para a rota dados do post, passando o id como parametro
  };

  return (
    <div>
      <h1>Lista de Posts</h1>
      {post.map(post => ( // o .map vai percorrer pelos itens desse array, nesse caso os posts, pra cada post tera uma div
        <div
          key={post.id} // chave unica para cada post
          onClick={() => handleClick(post.id)} // ao clicar em um post, chama a função, que irá navegar para a rota dados
        >
          {post.title}
        </div>
      ))}
    </div>
  );
}

export default Posts;
