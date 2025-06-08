import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate(); // hook de navegação

  const handleClick = () => {
    navigate('/posts'); // navega para a rota /posts
  };

  return (
    <div>
      <h1>Prova de React</h1>
      <button onClick={handleClick}>Ver lista de Posts</button>
    </div>
  );
}

export default App;
