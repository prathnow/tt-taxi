import styled from "styled-components";
import CompanyInfo from "./CompanyInfo";
import CompanyImage from "./CompanyImage";
import backImage from "../assets/images/section-about-bg.png";
import ttImage from "../assets/images/tt-taxi-wieliczka.webp";

const StyledAboutUs = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.mainBgColor.black};
  padding: 3rem;
  margin: 0 auto;
`;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  /* background-color: ${({ theme }) => theme.mainBgColor.grey}; */
  background-image: url(${backImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: ${({ theme }) => theme.mainBgColor.grey};

  padding: 1rem;
  white-space: pre-line;

  & > div {
    width: 45%;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;

    & > div {
      width: 80%;
    }
  }
`;

const company = {
  name: "TT-Taxi Wieliczka",
  subName: "Transport Osobowy na Najwyższym Poziomie",
  desc: "TT-TAXI to dynamicznie rozwijająca się firma, która od lat z powodzeniem świadczy usługi transportu osobowego w Wieliczce i okolicach. \n \n  Dzięki zaangażowaniu naszego zespołu i nieustannemu dążeniu do doskonałości, zdobyliśmy zaufanie setek klientów, którzy cenią sobie naszą punktualność, profesjonalizm i indywidualne podejście do każdego zlecenia. \n \n TT-TAXI – Twój niezawodny partner w podróży. Zaufaj nam i przekonaj się, jak komfortowy może być transport osobowy!",
  imgUrl: ttImage,
};

function AboutUs() {
  return (
    <StyledAboutUs
      id="my"
      className="about-us"
    >
      <AboutUsContainer>
        <CompanyInfo
          name={company.name}
          subName={company.subName}
          desc={company.desc}
        />
        <CompanyImage img={company.imgUrl} />
      </AboutUsContainer>
    </StyledAboutUs>
  );
}

export default AboutUs;
