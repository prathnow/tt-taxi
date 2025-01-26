import styled from "styled-components";
import SocialLogos from "../ui/SocialLogos";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.mainBgColor.darkGrey};
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 20px 40px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionName = styled.h4`
  margin: 0 0 2rem 0;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;

  li {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.headingColor.h2};
      font-size: 14px;
      transition: all 0.3s;

      &:hover {
        color: #ccc;
      }
    }
  }
`;

const ContactInfo = styled.div`
  text-align: right;
  font-size: 14px;

  p {
  }

  a {
    text-decoration: none;
    color: #ffffff;

    &:hover {
      color: #ccc;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer
      id="kontakt"
      className="footer"
    >
      <Section>
        <SocialLogos />
      </Section>
      <Section>
        <LinksList>
          <li>
            <a href="/#header">Strona główna</a>
          </li>
          <li>
            <a href="/#uslugi">Nasze usługi</a>
          </li>
          <li>
            <a href="/#dodatkowe">Nasz sklep</a>
          </li>
          <li>
            <a href="/#my">O nas</a>
          </li>
          <li>
            <a href="/#awards">Orły transportu</a>
          </li>
        </LinksList>
      </Section>
      <Section>
        <ContactInfo>
          <SectionName>
            <strong>24h TT TAXI Wieliczka</strong>
          </SectionName>
          <p>Niepołomska 17b</p>
          <p>32-020 Wieliczka</p>
          <p>
            <a href="tel:+48537375008">+48 537 375 008</a>
          </p>
          <p>
            <a href="mailto:tt24taxi@gmail.com">tt24taxi@gmail.com</a>
          </p>
        </ContactInfo>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
