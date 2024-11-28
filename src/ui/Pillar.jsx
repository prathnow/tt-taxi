import { cloneElement } from "react";
import styled from "styled-components";

const StyledPillar = styled.div`
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.mainBgColor.white};
  background-color: ${({ theme }) => theme.mainBgColor.grey};
  width: 15rem;
  font-weight: 500;
  font-size: 1.4rem;
  text-transform: uppercase;
  line-height: 1.2;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const PillarIcon = styled.div`
  padding: 2rem 1rem 0 1rem;
`;

const PillarDesc = styled.p`
  padding: 0 1rem 2rem 1rem;
`;

function Pillar({ icon, children }) {
  const iconClone = cloneElement(icon, { size: "2.6rem" });
  return (
    <StyledPillar>
      <PillarIcon>{iconClone}</PillarIcon>
      <PillarDesc>{children}</PillarDesc>
    </StyledPillar>
  );
}

export default Pillar;
