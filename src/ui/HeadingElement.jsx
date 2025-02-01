import styled, { css } from "styled-components";

const tags = {
  h1: css`
    font-size: ${({ theme }) => theme.headingSize.h1};
    color: ${({ theme }) => theme.headingColor.h1};
    font-weight: 700;
  `,
  h2: css`
    font-size: ${({ theme }) => theme.headingSize.h2};
    color: ${({ theme }) => theme.headingColor.h2};
    line-height: 1.8;
    font-weight: 700;
  `,
  h3: css`
    font-size: ${({ theme }) => theme.headingSize.h3};
    color: ${({ theme }) => theme.headingColor.h3};
    line-height: 1.2;
  `,
};

const Tag = styled.div`
  ${(props) => tags[props.$tag] || tags.h1};
`;

function HeadingElement({ tag = "h1", children }) {
  return (
    <Tag
      as={tag}
      $tag={tag}
    >
      {children}
    </Tag>
  );
}

export default HeadingElement;
