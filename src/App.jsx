import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [posts, setPosts] = useState([]); // Guarda os posts

  useEffect(() => {
    function getApi() {
      // Faz a requisição GET com .then()
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }

    getApi(); // Chama a função ao iniciar
  }, []);

  return (
    <div>
      <h1>Lista de Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/dados/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default App;