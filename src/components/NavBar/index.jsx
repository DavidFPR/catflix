import styled from 'styled-components';
import catflixLight from '/assets/img/logo/catflix-light.png';

const NavStyled = styled.nav`
  width: 100%;
  height: 10vh;
  background-color: #1E1E1E;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-family: var(--main-font);
  position: fixed;
  top: 0;
  z-index: 99;

  & img {
    width: 120px;

  }
`;

const NavBar = () => {
  return (
    <>
      <NavStyled>
        <img src={catflixLight} alt="" />
      </NavStyled>
    </>
  );
};

export default NavBar;
