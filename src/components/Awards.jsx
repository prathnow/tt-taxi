import styled from "styled-components";
import mainLogo from "../assets/images/orly-logo.png";
import badge1 from "../assets/images/badge1.png";
import badge2 from "../assets/images/badge2.png";
import badge3 from "../assets/images/badge3.png";
import badge4 from "../assets/images/badge4.png";
import badge5 from "../assets/images/badge5.png";
import badge6 from "../assets/images/badge6.png";

const StyledAwards = styled.section`
  width: 80%;
  background-color: ${({ theme }) => theme.mainBgColor.white};
  padding: 3rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 20rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: 0 3rem;

  @media (max-width: 700px) {
    padding: 0 13rem;
  }

  @media (max-width: 530px) {
    padding: 0 5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 700px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Badge = styled.img`
  width: 60px;
  height: auto;
`;

const Subtitle = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  color: #666;
`;

function Awards() {
  return (
    <StyledAwards className="awards">
      <LogoWrapper>
        <TitleWrapper>
          <Title>Laureat oraz zwycięzca konkursu</Title>
          <Logo>
            <img
              src={mainLogo}
              alt="Orły Transportu Logo"
              width="100px"
            />
          </Logo>
        </TitleWrapper>
        <Logo>
          <Subtitle>2024</Subtitle>
          <Badge
            src={badge1}
            alt="2024 Gold"
          />
        </Logo>
        <Logo>
          <Subtitle>2023 GOLD</Subtitle>
          <Badge
            src={badge2}
            alt="2023 Gold"
          />
        </Logo>
        <Logo>
          <Subtitle>2023</Subtitle>
          <Badge
            src={badge3}
            alt="2023"
          />
        </Logo>
        <Logo>
          <Subtitle>2022 GOLD</Subtitle>
          <Badge
            src={badge4}
            alt="2022 Gold"
          />
        </Logo>
        <Logo>
          <Subtitle>2022</Subtitle>
          <Badge
            src={badge5}
            alt="2022"
          />
        </Logo>
        <Logo>
          <Subtitle>2022</Subtitle>
          <Badge
            src={badge6}
            alt="2022"
          />
        </Logo>
      </LogoWrapper>
    </StyledAwards>
  );
}

export default Awards;
