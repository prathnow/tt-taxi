import styled from "styled-components";

const CompanyImg = styled.img`
  border: 1rem solid #444;
`;

function CompanyImage({ img }) {
  return <CompanyImg src={img} />;
}

export default CompanyImage;
