import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-in;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 65rem;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  position: relative;
  animation: ${slideDown} 0.3s ease-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return createPortal(
    <Overlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <MdClose size={"2.6rem"} />
        </CloseButton>
        {children}
      </ModalContainer>
    </Overlay>,
    document.getElementById("portal-root")
  );
}

export default Modal;
