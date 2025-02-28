import styled from "styled-components";
import HeadingElement from "../ui/HeadingElement";
import { MdLocalPhone } from "react-icons/md";

const StyledCallToUs = styled.section`
  background-color: ${({ theme }) => theme.mainBgColor.yellow};
  padding: 2rem;
`;

const Phone = styled.a`
  display: block;
  font-size: 2.2rem;
`;

function CallToUs() {
  return (
    <StyledCallToUs className="call-to-us">
      <HeadingElement tag="h2">
        CZEKAMY NA TWÓJ TELEFON 24/7H
        <Phone href="tel:+48537375008">
          Taxi Wieliczka <MdLocalPhone /> +48 537 375 008
        </Phone>
      </HeadingElement>
    </StyledCallToUs>
  );
}

export default CallToUs;
