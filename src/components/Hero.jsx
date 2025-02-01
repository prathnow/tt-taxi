import styled from "styled-components";
import HeadingElement from "../ui/HeadingElement";
import Button from "../ui/Button";
import { useState } from "react";
import Modal from "../ui/Modal";
import OrderForm from "../ui/OrderForm";

const StyledHero = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: flex-start;
  width: 20%;
  text-align: left;
  text-shadow: 0.1em 0.1em #333;
  padding: 1rem;

  & > h1 {
    hyphens: none;
  }

  @media (min-width: 1450px) {
    width: 20%;
    top: 30%;
    left: 25%;
  }
`;

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <StyledHero>
      <HeadingElement tag="h1">Potrzebujesz podwózki?</HeadingElement>
      <Button onClick={openModal}>Zarezerwuj</Button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <OrderForm />
      </Modal>
    </StyledHero>
  );
}

export default Hero;
