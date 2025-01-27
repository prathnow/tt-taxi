import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CallToUs from "../components/CallToUs";
import Pillars from "../components/Pillars";
import AboutUs from "../components/AboutUs";
import OurServices from "../components/OurServices";
import AdditionalServices from "../components/AdditionalServices";
import Awards from "../components/Awards";
import ScrollToTopButton from "../ui/ScrollToTopButton";

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
      <MainLayoutContent>
        <CallToUs />
        <Pillars />
        <AboutUs />
        <OurServices />
        <AdditionalServices />
        <Awards />
      </MainLayoutContent>
      <Footer />
      <ScrollToTopButton />
    </MainLayoutContainer>
  );
}

export default MainLayout;
