import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Result = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const containerId = params.get('containerId');

  return (
    <Container>
      <h1>Container Criado com Sucesso!</h1>
      {containerId ? (
        <p>ID do Container: {containerId}</p>
      ) : (
        <p>Carregando informações...</p>
      )}
    </Container>
  );
};

export default Result;
