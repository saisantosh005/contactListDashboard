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
  margin-right: 20px;
`;
const SearchInput = styled.input`
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
  border-radius: 6px;
  padding: 8px;
  margin-right: 20px;
`;
const ContactsTableMainContainer = styled.div``;

const Table = styled.table`
  /* width: 350px; */
  margin: 20px;
`;
const TableHeader = styled.thead`
  background-color: #ccc4c8;
`;
const Th = styled.th`
  text-align: left;
  min-width: 100px;
  font-size: 14px;
  font-family: sans-serif;
  color: #524f50;
  padding: 6px;
`;
const TableBody = styled.div`
  /* width: 100%; */
  min-height: 250px;
  max-height: 400px;
  overflow: auto;
`;
const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`;
const Td = styled.td`
  min-width: ${(props) => (props.checkBox ? "30px" : "100px")};
  flex-wrap: wrap;
  margin-left: 15px;
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
`;
const LogoContainer = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 8px;
  margin-right: 10px;
`;
const LogoName = styled.p`
  font-size: 15px;
  font-family: sans-serif;
  color: white;
  padding: 0px;
  margin: 0px;
`;
const NameEmailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  /* border: 2px solid red; */
`;
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
const TabelAndChatOrDetailsContainer = styled.div``;

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

const Input = styled.input`
  font-size: 15px;
  font-family: sans-serif;
  background-color: #ded6d3;
  border-radius: 10px;
  padding: 8px;
  border: none;
  outline: none;
`;
// const ButtonContainer = styled.div`
//   border: 2px solid red;
// `;
export {
  SearchAndButtonContainer,
  SearchContainer,
  SearchInput,
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
  Email,
  TabelAndChatOrDetailsContainer,
  LabelAndInputContainer,
  Label
  // ButtonContainer
};
