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

const Table = styled.table`
  width: 350px;
  margin: 20px;
`;
const TableHeader = styled.thead`
  background-color: #ccc4c8;
`;
const Th = styled.th`
  font-size: 14px;
  font-family: sans-serif;
  color: #524f50;
  padding: 6px;
`;
const TableBody = styled.tbody`
  background-color: white;
  width: 100%;
`;
const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
`;
const Td = styled.td`
  /* border: 2px solid red; */
`;
const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LogoContainer = styled.div`
  background-color: lightgray;
  border-radius: 50%;
  padding: 8px;
  margin-right: 10px;
`;
const LogoName = styled.p`
  padding: 0px;
  margin: 0px;
`;
const NameEmailContainer = styled.div``;
const Name = styled.h1`
  font-size: 18px;
  font-family: sans-serif;
  padding: 0px;
  margin: 0px;
`;
const Email = styled.p`
  font-size: 12px;
  font-family: sans-serif;
  padding: 0px;
  margin: 0px;
`;

export {
  SearchAndButtonContainer,
  SearchContainer,
  Input,
  Button,
  ContactsTableMainContainer,
  Table,
  TableHeader,
  Th,
  TableBody,
  Td,
  Tr,
  InfoContainer,
  LogoContainer,
  LogoName,
  NameEmailContainer,
  Name,
  Email
};
