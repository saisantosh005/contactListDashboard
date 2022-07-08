import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const SearchAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin: 10px;
  margin-left: 15px;
  @media screen and (min-width: 568px) {
    max-width: 400px;
    margin-left: 20px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ded6d3;
  border-radius: 8px;
  padding: 5px;
  margin-right: 10px;
  margin: 2px;
  @media screen and (min-width: 568px) {
    padding: 8px;
    margin-right: 20px;
  }
`;
const SearchInput = styled.input`
  font-size: 12px;
  font-family: sans-serif;
  background-color: inherit;
  border: none;
  outline: none;
  @media screen and (min-width: 568px) {
    font-size: 16px;
  }
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
const ContactsTableMainContainer = styled.div`
  /* border: 2px solid blue; */
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
`;

const Table = styled.table`
  min-width: 180px;
  max-width: 250px;
  margin: 15px;
  /* border: 2px solid red; */
  @media screen and (min-width: 568px) {
    max-width: 500px;
  }
`;
const TableHeader = styled.thead`
  background-color: #ccc4c8;
`;
const Th = styled.th`
  text-align: left;
  font-size: 12px;
  font-family: sans-serif;
  color: #524f50;
  padding: 6px;
  @media screen and (min-width: 568px) {
    font-size: 16px;
  }
`;
const TableBody = styled.div`
  min-height: 200px;
  max-height: 300px;
  overflow: auto;
  @media screen and (min-width: 768px) {
    max-height: 500px;
  }
`;
const Tr = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  @media screen and (min-width: 568px) {
    padding: 8px;
  }
`;
const Td = styled.td`
  min-width: ${(props) => (props.checkBox ? "30px" : "100px")};
  flex-wrap: wrap;
  margin-left: 5px;
  /* border: 2px solid red; */
  @media screen and (min-width: 568px) {
    min-width: ${(props) => (props.checkBox ? "30px" : "100px")};
    margin-left: 10px;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
`;
const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  padding: 5px;
  margin-right: 10px;
  @media screen and (min-width: 568px) {
    width: 15px;
    height: 15px;
    padding: 10px;
  }
`;
const LogoName = styled.p`
  font-size: 11px;
  font-family: sans-serif;
  color: white;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 568px) {
    font-size: 16px;
  }
`;
const NameEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  /* border: 2px solid red; */
`;
const Name = styled.h1`
  font-size: 14px;
  font-family: sans-serif;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 568px) {
    font-size: 20px;
  }
`;
const Email = styled.p`
  font-size: 10px;
  font-family: sans-serif;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 568px) {
    font-size: 15px;
  }
`;
const TabelAndChatOrDetailsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  /* border: 2px solid black; */
  @media screen and (min-width: 567px) {
    max-width: 900px;
    font-size: 20px;
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

const Input = styled.input`
  font-size: 15px;
  font-family: sans-serif;
  background-color: #ded6d3;
  border-radius: 10px;
  padding: 8px;
  border: none;
  outline: none;
`;

const TabsContainer = styled(Tabs)`
  width: 100%;
  border: 2px solid red;
  margin: 10px;
  @media screen and (min-width: 658px) {
    width: auto;
    margin: 12px;
  }
`;

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
  Label,
  TabsContainer
  // ButtonContainer
};
