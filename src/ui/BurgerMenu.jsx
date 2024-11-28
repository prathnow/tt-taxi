import styled from "styled-components";

const BurgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 35px;
  height: 35px;
  background: none;
  border: none;
  cursor: pointer;

  div {
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.linkColor.menuLink};
    transition: transform 0.3s, opacity 0.3s;
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    div:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    div:nth-child(2) {
      opacity: 0;
    }
    div:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  `}
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background: ${({ theme }) => theme.mainBgColor.grey};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 200px;
  padding: 1rem;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  border-radius: 8px;
  z-index: 10;

  a {
    display: block;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.linkColor.menuLink};
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.linkColor.menuHover};
    }
  }
`;

function BurgerMenu({ isOpen, toggleMenu, links }) {
  return (
    <>
      {/* Burger Icon */}
      <BurgerButton
        onClick={toggleMenu}
        isOpen={isOpen}
        aria-label="Toggle menu"
      >
        <div />
        <div />
        <div />
      </BurgerButton>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            title={link.title}
          >
            {link.name}
          </a>
        ))}
      </MobileMenu>
    </>
  );
}

export default BurgerMenu;
