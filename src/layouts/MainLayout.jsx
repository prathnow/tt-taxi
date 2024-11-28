import styled from "styled-components";
import Header from "../components/Header";

const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const MainLayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  text-align: center;
`;

function MainLayout() {
  return (
    <MainLayoutContainer>
      <Header />
      <MainLayoutContent>content</MainLayoutContent>
    </MainLayoutContainer>
  );
}

export default MainLayout;
