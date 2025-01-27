import { CiCircleInfo } from "react-icons/ci";
import styled from "styled-components";
import HeadingElement from "./HeadingElement";

const Item = styled.div`
  display: flex;
  flex-direction: row;
  width: 30%;

  @media (max-width: 768px) {
    width: 45%;
  }
  @media (max-width: 600px) {
    width: 90%;
    align-items: center;
    flex-direction: column;
  }
`;

const ItemIcon = styled.span`
  padding: 0 1.8rem;
`;

const ItemContent = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.fontColor.tertiary};
  font-weight: 500;
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

function ServiceItem({ item }) {
  const { id, title, content } = item;

  return (
    <Item>
      <ItemIcon>
        <CiCircleInfo fontSize="2rem" />
      </ItemIcon>
      <ItemContent>
        <HeadingElement tag="h3">{title}</HeadingElement>
        {content}
      </ItemContent>
    </Item>
  );
}

export default ServiceItem;
