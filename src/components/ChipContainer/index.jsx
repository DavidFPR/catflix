import { useEffect, useState } from 'react';
import { Chip } from '@mui/material';
import styled from 'styled-components';

const ChipContainerStyled = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 10px;
  margin: 5vh 0;

  @media (min-width: 1024px) {
    justify-content: flex-end;
    overflow-x: hidden;
    box-sizing: border-box;
    padding: 0 10vh;
  }
`;

const ChipContainer = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);

  // Fetch categories on mount
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/DavidFPR/catflix-api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <ChipContainerStyled>
      <Chip
        label="Todos"
        style={{
          backgroundColor: '#ccc',
          color: '#000',
          border: activeCategory === 'Todos' ? '2px solid #000' : 'none',
          fontWeight: activeCategory === 'Todos' ? 'bold' : 'normal',
        }}
        onClick={() => setActiveCategory('Todos')}
      />
      {categories.map((category) => (
        <Chip
          key={category.name}
          label={category.name}
          style={{
            backgroundColor: category.color,
            color: '#000',
            border:
              activeCategory === category.name ? '2px solid #000' : 'none',
            fontWeight: activeCategory === category.name ? 'bold' : 'normal',
          }}
          onClick={() => setActiveCategory(category.name)}
        />
      ))}
    </ChipContainerStyled>
  );
};

export default ChipContainer;
