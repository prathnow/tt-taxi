import styled from "styled-components";
import AdditionalServicesItem from "../ui/AdditionalServicesItem";

const StyledAdditionalServices = styled.section`
  background-color: ${({ theme }) => theme.mainBgColor.lightGrey};
  padding: 2rem;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid #ddd;
`;

const AdditionalServicesContainer = styled.div`
  width: 80%;
  padding: 3rem 6rem 4rem 6rem;
  text-align: left;
  position: relative;
`;

const SectionHeading = styled.h4`
  text-align: left;
  & span {
    color: ${({ theme }) => theme.fontColor.gold};
  }
`;

const AdditionalServicesItems = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 2rem;
`;

const MoreItems = styled.a`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translate(-50%);
  transition: all 0.3s;
  font-size: 1.4rem;

  &:hover {
    color: ${({ theme }) => theme.fontColor.gold};
  }
`;

const servicesData = [
  {
    id: 1,
    title: "Bon podarunkowy",
    description: "Bon Podarunkowy na przejazdy dla Twoich bliskich",
    image: "/path/to/image1.png", // Podmień na poprawną ścieżkę
  },
  {
    id: 2,
    title: "Całodniowa dyspozycja",
    description: "Dyspozycja Kierowcy obejmuje wszelakiego typu kursy",
    image: "/path/to/image2.png",
  },
  {
    id: 3,
    title: "Gift Cart",
    description: "Bon Podarunkowy na przejazdy dla Twoich bliskich",
    image: "/path/to/image3.png",
  },
];

function AdditionalServices() {
  return (
    <StyledAdditionalServices
      id="dodatkowe"
      className="additional-services"
    >
      <AdditionalServicesContainer>
        <SectionHeading>
          Nasze usługi <span>dodatkowe</span>
        </SectionHeading>
        <AdditionalServicesItems>
          {servicesData.map((service) => (
            <AdditionalServicesItem
              key={service.id}
              item={service}
            />
          ))}
        </AdditionalServicesItems>
        <MoreItems href="">Zobacz więcej produktów</MoreItems>
      </AdditionalServicesContainer>
    </StyledAdditionalServices>
  );
}

export default AdditionalServices;
