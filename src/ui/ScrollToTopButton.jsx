import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.button.primaryBg};
  color: ${({ theme }) => theme.button.primaryText};
  border: none;
  padding: 1rem;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  z-index: 1000;

  &:hover {
    background: ${({ theme }) => theme.button.primaryBgHover};
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      isVisible={isVisible}
      onClick={scrollToTop}
      aria-label="Powrót na górę"
    >
      <FaArrowCircleUp />
    </Button>
  );
};

export default ScrollToTopButton;
