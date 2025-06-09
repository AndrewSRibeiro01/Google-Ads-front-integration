import Button from '../components/Button';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/login';
  };

  return (
    <Container>
      <h1>Integração Google Tag Manager</h1>
      <Button onClick={handleLogin}>Login com Google</Button>
    </Container>
  );
};

export default Home;
