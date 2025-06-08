import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

function App() {
  const navigate = useNavigate(); // hook de navegação

  const handleClick = () => {
    navigate('/posts'); // navega para a rota /posts
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginTop: '20px'}}>
      <Typography variant="h4">Prova de React</Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>Ver lista de Posts</Button>
    </div>
  );
}

export default App;
