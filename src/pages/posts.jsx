import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

function Posts() {
  const [post, setPost] = useState([]); // armazena o post
  const navigate = useNavigate(); // hook de navegação

  // quando a página abrir, busca os dados do post
  useEffect(() => { // useeffect é um hook do react para carregar automaticamente
    function getApi() {
      // faz a requisição GET
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPost(data)); 
    }

    getApi(); // chama a função quando carrega a página
  }, []);

  const handleClick = (id) => {
    navigate(`/dados/${id}`); // vai para a rota dados do post, passando o id como parametro
  };

  return (
    <div style={{marginLeft: '8px'}}>
      <Typography variant='h4' style={{marginTop: '20px', marginBottom: '20px', fontWeight: 'bold'}}>Lista de Posts</Typography>
      {post.map(post => ( // o .map vai percorrer pelos itens desse array, nesse caso os posts, pra cada post tera uma div
       <Typography variant='body1' style={{marginTop: '4px'}}>
        <div
          key={post.id} // chave unica para cada post
          onClick={() => handleClick(post.id)} // ao clicar em um post, chama a função, que irá navegar para a rota dados
        >
          {post.title}
        </div>
       </Typography>
      ))}
    </div>
  );
}

export default Posts;
