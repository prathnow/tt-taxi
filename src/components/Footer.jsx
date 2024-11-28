import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.mainBgColor.darkGrey};
  padding: 2rem;
`;

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
