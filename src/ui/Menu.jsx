import styled from "styled-components";

const Link = styled.a`
  transition: all 0.3s;

  &:link,
  &:visited {
    color: ${({ theme }) => theme.linkColor.menuLink};
    font-size: 1.5rem;
  }
  &:hover {
    color: ${({ theme }) => theme.linkColor.menuHover};
  }
  &:active {
    color: ${({ theme }) => theme.linkColor.menuActive};
  }
`;

function Menu({ links }) {
  return (
    <>
      {links?.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          title={link.title}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}

export default Menu;
