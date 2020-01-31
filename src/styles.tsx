import styled from 'styled-components';

const theme = {
  colors: {
    background: 'lightgray'
  }
}

const Container = styled.div`
  min-height: 400px;
  display: flex;
  align-items: flex-start;
`;

const ColumnContainer = styled.div`
  flex: 1;
  background: ${theme.colors.background};
  margin: 0 10px;
`;

const ItemContainer = styled.div`

`;

export {
  Container,
  ColumnContainer,
  ItemContainer
};
