import styled, { css } from "styled-components";
import logo from "../assets/logo/main-logo.png";
import { useNavigate } from "react-router";

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
  cursor: pointer;
`;

Img.defaultProps = {
  $size: "medium",
};

function Logo({ text, size, style }) {
  const navigate = useNavigate();
  return (
    <Img
      src={logo}
      alt={text}
      $size={size}
      style={style}
      onClick={() => navigate("/")}
    />
  );
}

export default Logo;
