import DeleteInfo from '../Img/delete.svg';
import React, { useState } from 'react';
import * as S from '../Styled/styleMain.js';

const Main = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    item('');
    lista('');
  };
  const [item, setItem] = useState('');
  const [lista, setLista] = useState([]);
  const tarefa = { tarefa: item, id: Date.now() };
  const Add = () => {
    if (item !== '') {
      setLista(lista.concat(tarefa));
    }
    setItem('');
  };
  const Remove = (id) => {
    setLista(lista.filter((item) => item.id !== id));
  };
  return (
    <S.Container>
      <S.ContainerInput onSubmit={handleSubmit}>
        <S.Search value={item} onChange={(e) => setItem(e.target.value)} />
        <S.Submit onClick={() => Add()}>Add</S.Submit>
      </S.ContainerInput>
      <S.ContainerOptions>
        {lista.map((item, index) => (
          <li key={index}>
            {item.tarefa}
            <S.DeleteButtom onClick={() => Remove(item.id)}>
              <img src={DeleteInfo} alt="delete" />
            </S.DeleteButtom>
          </li>
        ))}
      </S.ContainerOptions>
    </S.Container>
  );
};

export default Main;
