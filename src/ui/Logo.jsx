import styled, { css } from "styled-components";
import logo from "../assets/logo/main-logo.png";

const sizes = {
  small: css`
    height: 3.5rem;
  `,
  medium: css`
    height: 8rem;
  `,
  large: css`
    height: 15rem;
  `,
};

const Img = styled.img`
  ${(props) => sizes[props.$size]};
`;

Img.defaultProps = {
  $size: "medium",
};

function Logo({ text, size, style }) {
  return (
    <Img
      src={logo}
      alt={text}
      $size={size}
      style={style}
    />
  );
}

export default Logo;
