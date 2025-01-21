import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const SectionStyled = styled.section`
  background-color: #1e1e1e;
  width: 100%;
  height: 10vh;
  color: #eaeaea;
  position: fixed;
  bottom: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;

`;

const FooterNav = () => {
  const location = useLocation();
  const highlightColor = '#FF5722';

  return (
    <SectionStyled>
      <div>
        <ButtonStyled>
          <Link to="/" style={{ textDecoration: 'none', color: location.pathname === '/' ? highlightColor : '#eaeaea' }}>
            <HomeIcon fontSize="large" />
          </Link>
        </ButtonStyled>
      </div>
      <div>
        <ButtonStyled>
          <AddCircleIcon fontSize="large" style={{color: '#eaeaea'}}/>
        </ButtonStyled>
      </div>
      <div>
        <ButtonStyled>
          <Link to="/favoritos" style={{ textDecoration: 'none', color: location.pathname === '/favoritos' ? highlightColor : '#eaeaea' }}>
            <FavoriteIcon fontSize="large" />
          </Link>
        </ButtonStyled>
      </div>  
    </SectionStyled>
  );
};

export default FooterNav;
