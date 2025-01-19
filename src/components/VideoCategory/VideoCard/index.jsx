import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CardStyled = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 250px;
  min-width: 100%;
  background-color: var(--card-bg-color);
  border-radius: 8px;
  border: 2px solid #ff80ab;

  & h2 {
    font-family: var(--secondary-font);
    color: #ff80ab;
    font-size: 18px;
  }

  & img {
    border-radius: 8px 8px 0 0;
    height: 70%;
    width: 100%;
  }
`;

const CardInfo = styled.footer`
  display: flex;
  width: 100%;
  min-height: 30%;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;

  & :first-child {
    color: #eaeaea;
  }
`;

const VideoCard = () => {
  return (
    <CardStyled>
      <img src="https://picsum.photos/200" alt="" />
      <CardInfo>
        <h2>Titulo video</h2>
        <ButtonStyled>
          <FavoriteBorderIcon fontSize="medium" />
        </ButtonStyled>
        <ButtonStyled>
          <EditIcon fontSize="medium" />
        </ButtonStyled>
        <ButtonStyled>
          <DeleteForeverIcon fontSize="medium" />
        </ButtonStyled>
      </CardInfo>
    </CardStyled>
  );
};

export default VideoCard;
