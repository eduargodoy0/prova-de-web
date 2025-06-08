import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]); // guarda os posts
  const navigate = useNavigate(); // hook para navegação

  useEffect(() => {
    function getApi() {
      // faz a requisição GET
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }

    getApi(); // chama a função
  }, []);

  // função chamada ao clicar no post e navega para os dados do post
  const handleClick = (id) => { 
    navigate(`/dados/${id}`); // navega para rota com o id do post
  };

  return (
    <div>
      <h1>Lista de Posts</h1>
      {posts.map(post => (
        <div
          key={post.id}
          onClick={() => handleClick(post.id)} // Chama a função handleClick ao clicar
        >
          {post.title}
        </div>
      ))}
    </div>
  );
}

export default App;
