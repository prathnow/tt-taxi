import styled from "styled-components";
import HeadingElement from "../ui/HeadingElement";
import Button from "../ui/Button";

const StyledHero = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  width: 30%;
  text-align: left;
  text-shadow: 0.1em 0.1em #333;

  @media (min-width: 1450px) {
    width: 20%;
    top: 15%;
    left: 25%;
  }
`;

function Hero() {
  return (
    <StyledHero>
      <HeadingElement tag="h1">Potrzebujesz podwózki?</HeadingElement>
      <Button>Zarezerwuj</Button>
    </StyledHero>
  );
}

export default Hero;
