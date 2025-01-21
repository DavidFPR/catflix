import styled from 'styled-components';
import { Link } from 'react-router-dom';
import catflixLight from '/assets/img/logo/catflix-light.png';

const NavStyled = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: var(--nav-bg-color);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: var(--main-font);
  position: fixed;
  top: 0;
  z-index: 99;

  @media (min-width: 1024px) {
    justify-content: space-between;
    padding: 0 20px;
  }

  & img {
    width: 120px;
    margin-left: 20px;
  }
`;

const LinksContainer = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    gap: 20px;
  }

  & a {
    color: var(--main-text-color);
    text-decoration: none;
    font-size: 18px;
    margin-right: 50px;
  }

  & a:hover {
    color: var(--highlight-text-color);
  }
`;

const NavBar = () => {
  return (
    <NavStyled>
      <Link to="/">
        <img src={catflixLight} alt="Catflix Logo" />
      </Link>
      <LinksContainer>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/nuevo-video">Nuevo Video</Link>
      </LinksContainer>
    </NavStyled>
  );
};

export default NavBar;
