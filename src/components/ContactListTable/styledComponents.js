import styled from "styled-components";
import { Tabs } from "react-tabs";

const SearchAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px;
  @media screen and (min-width: 568px) {
    max-width: 400px;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ded6d3;
  border-radius: 8px;
  padding: 5px;
  margin: 2px;
  margin-right: 10px;
  @media screen and (min-width: 568px) {
    padding: 8px;
    margin-right: 20px;
  }
`;
const SearchInput = styled.input`
  background-color: inherit;
  font-size: 12px;
  font-family: sans-serif;
  border: none;
  outline: none;
  @media screen and (min-width: 568px) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  color: white;
  background-image: linear-gradient(to right, #f0520a, #f00a71);
  font-size: 10px;
  font-family: sans-serif;
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
  flex-grow: 1;
  flex-shrink: 1;
  box-sizing: border-box;
`;

const Table = styled.table`
  /* flex-grow: 1; */
  max-width: 350px;
  @media screen and (min-width: 568px) {
    width: 50%;
    max-width: 400px;
  }
`;
const TableHeader = styled.thead`
  background-color: #ccc4c8;
`;
const Th = styled.th`
  color: #524f50;
  font-size: 12px;
  font-family: sans-serif;
  text-align: left;
  padding: 6px;
  @media screen and (min-width: 568px) {
    font-size: 16px;
  }
`;
const TableBody = styled.tbody`
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
  &:hover {
    background-color: ${(props) => (props.header ? "" : "lightblue")};
  }
  @media screen and (min-width: 568px) {
    padding: 8px;
  }
`;
const Td = styled.td`
  display: flex;
  justify-content: ${(props) => (props.last ? "flex-end" : "flex-start")};
  flex-wrap: wrap;
  min-width: ${(props) => (props.checkBox ? "30px" : "100px")};
  margin-left: 5px;
  @media screen and (min-width: 568px) {
    min-width: ${(props) => (props.checkBox ? "30px" : "100px")};
    margin-left: 10px;
  }
`;
const LoadingContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 568px) {
    width: 50%;
    max-width: 350px;
  }
`;
const LoadingText = styled.p``;
const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
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
  padding: 10px;
  @media screen and (min-width: 567px) {
    justify-content: space-between;
    font-size: 20px;
    max-width: 900px;
  }
`;

const IconContainer = styled.button`
  font-size: 12px;
  padding: 4px;
  background: none;
  border: none;
`;

const TabsContainer = styled(Tabs)`
  width: 100%;
  margin: 10px;
  @media screen and (min-width: 658px) {
    width: 50%;
    margin: 0px;
    margin-left: 20px;
  }
`;

const TableContainer = styled.div``;
const TabsContainerBox = styled.div``;
export {
  SearchAndButtonContainer,
  SearchContainer,
  SearchInput,
  IconContainer,
  Button,
  ContactsTableMainContainer,
  Table,
  TableHeader,
  Th,
  TableBody,
  Td,
  Tr,
  LoadingContainer,
  LoadingText,
  InfoContainer,
  LogoContainer,
  LogoName,
  NameEmailContainer,
  Name,
  Email,
  TabelAndChatOrDetailsContainer,
  TabsContainer,
  TableContainer,
  TabsContainerBox
};
