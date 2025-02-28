import styled from "styled-components";
import Menu from "../ui/Menu";
import { useEffect, useState } from "react";
import BurgerMenu from "../ui/BurgerMenu";
import { useLocation } from "react-router";

const links = [
  {
    name: "Strona główna",
    href: "/",
    title: "TT-Taxi Wieliczka",
  },
  {
    name: "O Nas",
    href: "/#my",
    title: "TT-Taxi Wieliczka",
  },
  {
    name: "Usługi",
    href: "/#uslugi",
    title: "TT-Taxi Wieliczka",
  },
  {
    name: "Sklep",
    href: "/sklep",
    title: "TT-Taxi Wieliczka",
  },
  {
    name: "Kontakt",
    href: "/kontakt",
    title: "TT-Taxi Wieliczka",
  },
];

const StyledNavigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 2.5rem;
  width: 100%;

  @media (max-width: 600px) {
    display: none;
  }
`;

const BurgerWrapper = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    align-self: center;
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 100;
    padding: 1rem;
  }
`;

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  });

  return (
    <>
      <StyledNavigation
        as="nav"
        role="navigation"
        aria-label="Main"
      >
        <Menu links={links} />
      </StyledNavigation>

      <BurgerWrapper>
        <BurgerMenu
          isOpen={isMobileMenuOpen}
          toggleMenu={toggleMobileMenu}
          links={links}
          closeMenu={closeMobileMenu}
        />
      </BurgerWrapper>
    </>
  );
}

export default Navigation;
