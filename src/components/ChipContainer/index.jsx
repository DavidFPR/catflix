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

const ChipContainer = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  return (
    <ChipContainerStyled>
      {categories.map((category) => (
        <Chip
          key={category.name}
          label={category.name}
          style={{
            backgroundColor: category.color,
            color: '#eaeaea',
            fontSize: '16px',
          }}
        />
      ))}
    </ChipContainerStyled>
  );
};

export default ChipContainer;
