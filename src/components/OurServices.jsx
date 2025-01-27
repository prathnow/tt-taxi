import styled from "styled-components";
import ServiceItem from "../ui/ServiceItem";
import HeadingElement from "../ui/HeadingElement";

const StyledOurServices = styled.section`
  background-color: ${({ theme }) => theme.mainBgColor.white};
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
`;

const OurServicesContainer = styled.div`
  width: 80%;
  padding: 3rem 6rem 3rem 6rem;
  text-align: left;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3), 4px 0px 5px rgba(0, 0, 0, 0.2),
    -4px 0px 5px rgba(0, 0, 0, 0.2);
`;

const ServicesItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2rem 0;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const ItemsData = [
  {
    id: 1,
    title: "Transport Lokalny",
    content:
      "Szybkie i bezpieczne przejazdy na terenie miasta i okolic - idealne na codziennie potrzeby",
  },
  {
    id: 2,
    title: "Transport Lotniskowy",
    content:
      "Komfortowe i punktualne przejazdy na lotnisko i z lotniska, aby zapewnić spokojny start i zakończenie podróży.",
  },
  {
    id: 3,
    title: "Transport Firmowy",
    content:
      "Profesjonalne usługi transportowe dla firm i klientów biznesowych – punktualność i komfort na najwyższym poziomie.",
  },
  {
    id: 4,
    title: "Transport Weselny",
    content:
      "Eleganckie i niezawodne przewozy dla gości weselnych, aby wszyscy dotarli na czas i w dobrym stylu.",
  },
  {
    id: 5,
    title: "Wieczory Panieńskie i Kawalerskie",
    content:
      "Bezpieczny transport podczas wieczornych wyjść – Ty się bawisz, my zadbamy o resztę!",
  },
  {
    id: 6,
    title: "Przewozy VIP",
    content:
      "Luksusowe przejazdy dla najbardziej wymagających klientów – dyskretnie, elegancko i z pełnym szacunkiem dla prywatności.",
  },
];

function OurServices() {
  return (
    <StyledOurServices id="uslugi">
      <OurServicesContainer>
        <HeadingElement tag="h2">Nasze usługi</HeadingElement>
        <ServicesItems>
          {ItemsData.map((item) => (
            <ServiceItem
              key={item.id}
              item={item}
            />
          ))}
        </ServicesItems>
      </OurServicesContainer>
    </StyledOurServices>
  );
}

export default OurServices;
