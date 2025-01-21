import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import FooterNav from '../../components/FooterNav';

const NoEncontradoContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 10vh 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & h1 {
    color: var(--highlight-text-color);
    text-align: center;
    font-family: var(--secondary-font);
    font-weight: bold;
    font-size: 40px;
  }

  & img {
    width: 95%;
  }

  @media (min-width: 768px) {
    & img {
      width: 50%;
    }
  }

  @media (min-width: 1024px) {
    & img {
      width: 30%;
    }
  }
`;

const NotFound = () => {
  return (
    <>
      <NavBar />
      <NoEncontradoContainer>
        <h1>Página no encontrada</h1>
        <img
          src="src/pages/NotFound/404cat.png"
          alt="Gato 404 página no encontrada"
        />
      </NoEncontradoContainer>
      <FooterNav />
    </>
  );
};

export default NotFound;
