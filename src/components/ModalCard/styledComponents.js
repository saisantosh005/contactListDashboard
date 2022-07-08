import styled from "styled-components";

const Input = styled.input`
  font-size: 15px;
  font-family: sans-serif;
  background-color: #ded6d3;
  border-radius: 10px;
  padding: 8px;
  border: none;
  outline: none;
`;
const Button = styled.button`
  font-size: 10px;
  font-family: sans-serif;
  color: white;
  background-image: linear-gradient(to right, #f0520a, #f00a71);
  border: none;
  border-radius: 6px;
  padding: 6px;
  margin: 2px;
  @media screen and (min-width: 568px) {
    font-size: 16px;
    padding: 8px;
  }
`;
const LabelAndInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
const Label = styled.label`
  font-family: sans-serif;
  font-size: 16px;
  width: 80px;
`;

export { Input, Button, LabelAndInputContainer, Label };
