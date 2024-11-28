import styled from "styled-components";
import HeadingElement from "../ui/HeadingElement";

const StyledCallToUs = styled.section`
  background-color: ${({ theme }) => theme.mainBgColor.yellow};
  padding: 2rem;
`;

const Phone = styled.a`
  display: block;
  font-size: 130%;
`;

function CallToUs() {
  return (
    <StyledCallToUs>
      <HeadingElement tag="h2">
        CZEKAMY NA TWÓJ TELEFON 24/7H
        <Phone href="tel:+48537375008">+48 537 375 008</Phone>
      </HeadingElement>
    </StyledCallToUs>
  );
}

export default CallToUs;
