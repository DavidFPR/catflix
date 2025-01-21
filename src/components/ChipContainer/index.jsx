import { useEffect, useState } from 'react';
import { Chip } from '@mui/material';
import styled from 'styled-components';

const ChipContainerStyled = styled.section`
  display: flex;
  width: 100%;
  gap: 12px;
  overflow: scroll;
  margin-top: 24px;
`;

const ChipContainer = ({ activeCategory, setActiveCategory }) => {
  const [categories, setCategories] = useState([]);

  // Fetch categories on mount
  useEffect(() => {
    fetch('http://localhost:3000/categories')
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
