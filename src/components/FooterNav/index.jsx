import { Link } from 'react-router-dom';
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
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;

  & :first-child {
    color: #eaeaea;
  }
`;

const FooterNav = () => {
  return (
    <SectionStyled>
      <div>
        <ButtonStyled>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <HomeIcon fontSize="large" />
          </Link>{' '}
        </ButtonStyled>
      </div>
      <div>
        <ButtonStyled>
          <AddCircleIcon fontSize="large" />
        </ButtonStyled>
      </div>
      <div>
        <ButtonStyled>
          <Link
            to="/favoritos"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <FavoriteIcon fontSize="large" />
          </Link>
        </ButtonStyled>
      </div>
    </SectionStyled>
  );
};

export default FooterNav;
