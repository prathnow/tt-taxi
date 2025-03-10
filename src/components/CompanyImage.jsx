import styled from "styled-components";

const CompanyImg = styled.img`
  border: 1rem solid #444;
`;

function CompanyImage({ img }) {
  return (
    <CompanyImg
      src={img}
      alt="TT-Taxi Wieliczka Firma Transportowa Roku 2024"
    />
  );
}

export default CompanyImage;
