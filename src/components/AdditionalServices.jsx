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
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  width: 80%;
  padding: 3rem 6rem 4rem 6rem;
  text-align: left;
  position: relative;
`;

const SectionHeading = styled.h4`
  width: 100%;
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
    image:
      "https://cdn.sumup.store/2/th640/68357fac484febedda7ef36d10e8af4b/21afed7b-8b09-48f9-80c3-3ad124b5d831.jpeg",
    link: "/sklep/dccc4fe0-bc65-4dbe-8df6-88afcd957eae/bon-podarunkowy-taxi-wieliczka-tt-taxi-24h",
  },
  {
    id: 2,
    title: "Całodniowa dyspozycja",
    description: "Dyspozycja Kierowcy obejmuje wszelakiego typu kursy",
    image:
      "https://cdn.sumup.store/2/th640/68357fac484febedda7ef36d10e8af4b/2c158e29-79ca-44bb-9f10-1bbef9e7d205.jpeg",
    link: "/sklep/7c7715a2-2616-42f4-8ef9-9aa7652c9ba0/dyspozycja-kierowcy-taxi-wieliczka",
  },
  {
    id: 3,
    title: "Gift Cart",
    description: "Karta podarunkowa (jednorazowy użytek)",
    image:
      "https://cdn.sumup.store/2/th640/68357fac484febedda7ef36d10e8af4b/9d69c794-d24d-4953-8f7e-e03640256f31.jpeg",
    link: "/sklep/8e3516d1-bee2-4c85-a3c8-029725b02e2a/karta-podarunkowa-gift-card-taxi-24-numer-telefonu-wieliczka-%2B48537375008-ca%C5%82odobowo-7-dni-tt-taxi",
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
        <MoreItems href="/sklep">Zobacz więcej produktów</MoreItems>
      </AdditionalServicesContainer>
    </StyledAdditionalServices>
  );
}

export default AdditionalServices;
