import styled from "styled-components";

const SearchAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-left: 20px;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ded6d3;
  border-radius: 8px;
  padding: 8px;
`;
const Input = styled.input`
  font-size: 15px;
  font-family: sans-serif;
  background-color: inherit;
  border: none;
  outline: none;
`;
const Button = styled.button`
  font-size: 16px;
  font-family: sans-serif;
  color: white;
  background-image: linear-gradient(to right, #f0520a, #f00a71);
  border: none;
  border-radius: 10px;
  padding: 8px;
  margin-left: 20px;
`;
const ContactsTableMainContainer = styled.div``;

export {
  SearchAndButtonContainer,
  SearchContainer,
  Input,
  Button,
  ContactsTableMainContainer
};
