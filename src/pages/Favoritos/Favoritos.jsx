import { useFavorites } from '../../FavoritesContext.jsx';
import NavBar from '../../components/NavBar';
import FooterNav from '../../components/FooterNav';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCategory/VideoCard/index.jsx';

const FavoritosContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 10vh 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--main-font);
  gap: 18px;

  & h1 {
    color: var(--highlight-text-color);
    text-align: center;
    font-family: var(--secondary-font);
    font-weight: bold;
    font-size: 40px;
  }

  & p {
    color: var(--highlight-text-color);
    font-size: 32px;
  }
`;
const Favoritos = () => {
  const { favorites } = useFavorites();

  return (
    <FavoritosContainer>
      <NavBar />
      <h1>Encuentra aquí tus videos favoritos</h1>
      {favorites.length === 0 ? (
        <p>No hay videos favoritos.</p>
      ) : (
        favorites.map((video) => (
          <VideoCard
            key={video.youtubeLink}
            video={video}
            categoryColor="#FFD700"
          />
        ))
      )}
      <FooterNav />
    </FavoritosContainer>
  );
};

export default Favoritos;
