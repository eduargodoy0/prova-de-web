import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Dados() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    function getApi() {
      // Faz a requisição GET com .then()
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data));
    }

    getApi(); // Chama a função ao iniciar
  }, [id]);

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