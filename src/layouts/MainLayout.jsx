import styled from "styled-components";

const MainLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
`;

const MainLayoutContent = styled.div`
  max-width: 120rem;
  width: 100%;
  text-align: center;
`;

function MainLayout() {
  return (
    <MainLayoutContainer>
      <MainLayoutContent>content</MainLayoutContent>
    </MainLayoutContainer>
  );
}

export default MainLayout;
