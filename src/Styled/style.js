import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  input {
    width: 250px;
    height: 25px;
    border: 1px #b2b2b2 solid;
    border-radius: 4px;
  }
`;
export const ContainerInput = styled.form`
  display: flex;
`;
export const ContainerOptions = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DeleteButtom = styled.button`
  width: 20px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  img {
    width: 10px;
    margin-top: 10px;
    cursor: pointer;
  }
`;
export const Submit = styled.button`
  width: 100px;
  border: none;
  padding: 5px;
  margin-left: 5px;
`;
