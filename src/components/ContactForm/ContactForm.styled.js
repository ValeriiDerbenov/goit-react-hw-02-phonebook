import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;

  label {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  input {
    height: 30px;
    border-radius: 6px;
    font-size: 18px;
  }
`;
export const Button = styled.button`
  background-color: rgba(68, 68, 223, 0.903);
  color: white;
  height: 35px;
  margin-block: 20px;
  border-radius: 6px;
  border: 1px solid;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
