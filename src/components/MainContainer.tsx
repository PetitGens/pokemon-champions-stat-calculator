import styled from "styled-components"
import { ChampionsToEffortTable } from "./ChampionsToEffortTable";

export function MainContainer() {

  function changeMode() {
    alert('TODO'); //TODO
  }

  return (
    <Main>
      <button onClick={changeMode}>Change mode</button>
      <ChampionsToEffortTable />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;
`;
