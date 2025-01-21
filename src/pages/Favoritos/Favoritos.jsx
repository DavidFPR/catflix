import styled from 'styled-components';
import NavBar from '../../components/NavBar';
import FooterNav from '../../components/FooterNav';

const FavoritosContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  padding: 10vh 18px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    color: var(--highlight-text-color);
    text-align: center;
    font-family: var(--secondary-font);
    font-weight: bold;
    font-size: 40px;
  }
`;

const Favoritos = () => {
  return (
    <FavoritosContainer>
      <NavBar />
      <h1>Encuentra aquí tus videos favoritos</h1>
      <FooterNav />
    </FavoritosContainer>
  );
};

export default Favoritos;
