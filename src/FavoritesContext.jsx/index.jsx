import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (video) => {
    setFavorites((prevFavorites) => [...prevFavorites, video]);
  };

  const removeFavorite = (video) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.youtubeLink !== video.youtubeLink)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);