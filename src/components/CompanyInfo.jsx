import styled from "styled-components";
import HeadingElement from "../ui/HeadingElement";

const StyledCompanyInfo = styled.div`
  color: ${({ theme }) => theme.fontColor.quaternary};
  text-align: justify;
  padding: 4rem 2rem;
  line-height: 1.2;
`;

const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSize.medium};
  padding: 1rem 0 0 0;
`;

function CompanyInfo({ name, subName, desc }) {
  return (
    <StyledCompanyInfo>
      <HeadingElement tag="h2">{name}</HeadingElement>
      <Span>{subName}</Span>
      <Description>{desc}</Description>
    </StyledCompanyInfo>
  );
}

export default CompanyInfo;
