import styled from "styled-components";
import Sedebar from "./components/Sidebar";

const ContainerGeneral = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  height: 1000px;
`;

const ContainerSidebar = styled.div`
  width: 30%;
  background-color: #1155cc;
`;

const ContainerHader = styled.div`
  width: 70%;
`;

function App() {
  return (
    <ContainerGeneral>
      <ContainerSidebar>
        <Sedebar />
      </ContainerSidebar>
      <ContainerHader>
        <header></header>
      </ContainerHader>
    </ContainerGeneral>
  );
}

export default App;
