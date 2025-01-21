import { useState } from 'react';
import styled from 'styled-components';
import FooterNav from '../../components/FooterNav';
import NavBar from '../../components/NavBar';
import ChipContainer from '../../components/ChipContainer';
import VideoCategories from '../../components/VideoCategories';

const MainContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 10vh 18px;
  overflow: scroll;
`;

const Inicio = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  return (
    <>
      <NavBar />
      <MainContainer>
        <ChipContainer
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <VideoCategories activeCategory={activeCategory} />
      </MainContainer>
      <FooterNav />
    </>
  );
};

export default Inicio;
