import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  background: #1b1d20;
  box-shadow: 5px 4px 3px 0 rgb(0 0 0 / 50%);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.875rem;
  width: 400px;
  border-radius: 4px;
  padding: 20px;
`;
export const Search = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: #ffff;
  transition: 0.2s;
`;
export const ContainerInput = styled.form`
  display: flex;
`;
export const ContainerOptions = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: #b0b2b3;
  justify-content: center;
  list-style: none;
  li {
    margin: 8px;
  }
`;
export const DeleteButtom = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
  background-color: #fff;
  margin-left: 10px;

  img {
    width: 10px;
    cursor: pointer;
  }
`;
export const Submit = styled.button`
  display: block;
  padding: 10px;
  color: white;
  font-size: 0.8rem;
  background: linear-gradient(
    135deg,
    rgba(6, 147, 227, 1) 0%,
    rgb(155, 81, 224) 100%
  );
  cursor: pointer;
  border-radius: 5px;
  transition: 0.1s;
  border: none;
`;
