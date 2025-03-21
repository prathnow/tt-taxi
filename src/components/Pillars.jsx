import styled from "styled-components";
import Pillar from "../ui/Pillar";
import { BiCool, BiGift, BiLike, BiTimer } from "react-icons/bi";

const StyledPillars = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.mainBgColor.white};
  padding: 2rem;
  max-width: 80rem;
  margin: 0 auto;

  @media (max-width: 700px) {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    gap: 4rem 4rem;
    margin: 0 10rem 0 10rem;
  }
`;

const Gold = styled.span`
  color: ${({ theme }) => theme.fontColor.gold};
`;

function Pillars() {
  return (
    <StyledPillars className="pillars">
      <Pillar icon={<BiTimer />}>
        Szybko <Gold>bezpiecznie</Gold>
      </Pillar>
      <Pillar icon={<BiLike />}>
        Niskie <Gold>ceny</Gold> Promocje
      </Pillar>
      <Pillar icon={<BiGift />}>
        Program <Gold>lojalnościowy</Gold>
      </Pillar>
      <Pillar icon={<BiCool />}>
        Profesjonalnie <Gold>Komfortowo</Gold>
      </Pillar>
    </StyledPillars>
  );
}

export default Pillars;
