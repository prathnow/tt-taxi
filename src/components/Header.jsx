import styled from "styled-components";
import hero from "../assets/images/hero-bg.webp";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";
import Hero from "./Hero";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 49rem;
  background: black;
  /* Obrazek jako tło z maską */
  background-image: linear-gradient(
      to right,
      black 5%,
      transparent 30%,
      transparent 70%,
      black 95%
    ),
    url(${hero});

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 1300px) {
    background-size: cover;
    background-image: url(${hero});
    background-position: center top;
  }

  @media (min-width: 1450px) {
    height: 55rem;
    background-image: linear-gradient(
        to right,
        black 10%,
        transparent 30%,
        transparent 70%,
        black 90%
      ),
      url(${hero}); /* Twój obrazek jako tło */
    background-size: 75%;
    background-position: top top;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  align-content: space-between;
  flex-direction: row;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0 15% 0 15%;

  @media (max-width: 800px) {
    padding: 0 5% 0 5%;
  }

  @media (max-width: 700px) {
    padding: 0;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Logo
          $size="small"
          text="TT-Taxi"
        />
        <Navigation />
      </HeaderWrapper>

      <Hero />
    </StyledHeader>
  );
}

export default Header;
