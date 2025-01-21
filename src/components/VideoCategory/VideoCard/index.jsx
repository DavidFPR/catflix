import { useFavorites } from '../../../FavoritesContext.jsx';
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  border: 2px solid ${(props) => props.$borderColor || '#ff80ab'}; /* Dynamic border color */

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
  justify-content: space-between;
  align-items: center;
`;

const TitleStyled = styled.h2`
  font-family: var(--secondary-font);
  font-size: 18px;
  color: ${(props) => props.$titleColor || '#ff80ab'}; /* Dynamic title color */
  margin-left: 12px;
`;

const ButtonStyled = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 12px;

  & :first-child {
    color: #eaeaea;
  }
`;

const FavoriteButton = ({ isFavorite, onClick }) => (
  <ButtonStyled onClick={onClick}>
    {isFavorite ? (
      <FavoriteIcon fontSize="medium" />
    ) : (
      <FavoriteBorderIcon fontSize="medium" />
    )}
  </ButtonStyled>
);

const VideoCard = ({ video, categoryColor }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some(
    (fav) => fav.youtubeLink === video.youtubeLink
  );

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(video);
    } else {
      addFavorite(video);
    }
  };

  return (
    <CardStyled style={{ borderColor: categoryColor }}>
      <img src={video.youtubeThumb} alt={video.title} />
      <CardInfo>
        <TitleStyled style={{ color: categoryColor }}>
          {video.title}
        </TitleStyled>
        <FavoriteButton isFavorite={isFavorite} onClick={handleFavoriteClick} />
      </CardInfo>
    </CardStyled>
  );
};

export default VideoCard;
