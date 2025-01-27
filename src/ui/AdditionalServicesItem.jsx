import styled from "styled-components";
import { BuyButton } from "./BuyButton";

const StyledAdditionalServiceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 25%; /* Szerokość boxa */
  max-width: 30$;
  border: 1px solid ${({ theme }) => theme.fontColor.gold}; /* Kolor ramki */
  border-radius: 8px; /* Zaokrąglenie rogów */
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Delikatny cień */
  text-align: center;
  background-color: #fff; /* Kolor tła */
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); /* Efekt podniesienia */
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

function AdditionalServicesItem({ item }) {
  const { img, title, description } = item;

  return (
    <StyledAdditionalServiceItem>
      <ServiceImage src={img}></ServiceImage>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{description}</ServiceDescription>
      <BuyButton>Kup</BuyButton>
    </StyledAdditionalServiceItem>
  );
}

export default AdditionalServicesItem;
