import React, { useState } from 'react';
import uuid from 'uuid/v4';

import { 
  Container,
  ColumnContainer,
  ItemContainer
} from './styles';

const columns = [
  'To do',
  'In progress',
  'In review',
  'Done'
];

interface Item {
  name: string;
  column: string;
}

function App() {
  const [ items, setItems ] = useState([
    { name: 'name', column: 'To do' },
    { name: 'name', column: 'Done' },
    { name: 'name', column: 'To do' },
    { name: 'name', column: 'To do' }
  ]);

  const handleCreate = (title: string) => {
    setItems(previousItems => [
      ...previousItems,
      { name: 'new item', column: title }
    ])
  }
  
  return (
    <Container>
      { columns.map(column => (
        <Column 
          title={ column } 
          items={ items.filter(item => item.column === column) }
          handleCreate={ handleCreate }
        />
      )) }
    </Container>
  );
}

interface ColumnProps {
  title: string;
  items: Item[];
  handleCreate: (_: string) => void;
}

function Column({ title, items, handleCreate }: ColumnProps) {

  return (
    <ColumnContainer>
      <h4>{ title }</h4>
      { items.map(item => (
        <Item item={ item } />
      )) }
      <hr />
      <button onClick={ () => handleCreate(title) }>Create</button>
    </ColumnContainer>
  );
}

interface ItemProps {
  item: Item;
}

function Item({ item: { name } }: ItemProps) {
  return (
    <ItemContainer>
      { name }
    </ItemContainer>
  );
}

export default App;
