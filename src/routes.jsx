import { Routes, Route } from 'react-router-dom';
import App from './App';
import Dados from './pages/dados.jsx';

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/dados/:id" element={<Dados />} />
    </Routes>
  );
}

export default Rotas;
