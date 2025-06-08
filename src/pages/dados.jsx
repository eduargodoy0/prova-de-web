import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

function Dados() {
  const {id} = useParams(); // pega o id da url
  const [post, setPost] = useState(null); // armazena o post

  // quando a página abrir, busca os dados do post pelo id
  useEffect(() => {
    function getApi() {
      // faz a requisição GET
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => setPost(data));
    }

    getApi(); // chama a função quando carrega a página
  }, [id]);

  // se ainda não carregou, mostra essa mensagem. Pois se for algo diferente do post aparece carregando
  if (!post)
    return (
      <Typography variant="body1" style={{ marginTop: "4px" }}>Carregando</Typography>
    );

  return (
    <div style={{marginLeft: '16px'}}>
      <Typography variant="h5" style={{marginTop: '20px', marginBottom: '20px', fontWeight: 'bold'}}>{post.title}</Typography>
      <Typography variant="body1">{post.body}</Typography>
    </div>
  );
}

export default Dados;
