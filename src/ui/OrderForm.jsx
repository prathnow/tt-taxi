import { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 100%;
  text-align: center;

  & p {
    margin-top: 1rem;
  }

  & p:nth-child(5) {
    font-size: 1.4rem;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  font-size: 1.6rem;
`;

const ContactLink = styled.a`
  display: block;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  margin: 5px 0;
  &:hover {
    text-decoration: underline;
  }
`;

const FAQContainer = styled.div`
  margin-top: 3rem;
`;

const FAQHeader = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FAQItemWrapper = styled.div`
  border-bottom: 1px solid #ddd;
`;

const FAQButton = styled.button`
  width: 100%;
  padding: 1rem;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const FAQContent = styled.p`
  height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out;
  padding: ${({ isOpen }) => (isOpen ? "1rem" : "0 1rem")};
  background: #fafafa;
  font-size: 1.2rem;
`;

function OrderForm() {
  const FAQItem = ({ question, isOpen, onClick, children }) => {
    return (
      <FAQItemWrapper>
        <FAQButton onClick={onClick}>
          {question}
          <span>{isOpen ? "▲" : "▼"}</span>
        </FAQButton>
        <FAQContent isOpen={isOpen}>{children}</FAQContent>
      </FAQItemWrapper>
    );
  };

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <ModalContent>
      <h2>Rezerwacja</h2>
      <ContactInfo>
        📞 Telefon:{" "}
        <ContactLink href="tel:+48537375008">+48 537 375 008</ContactLink>
        ✉️ E-mail:{" "}
        <ContactLink href="mailto:tt24taxi@gmail.com">
          tt24taxi@gmail.com
        </ContactLink>
      </ContactInfo>
      <p>
        Aby zarezerwować termin, skontaktuj się z nami telefonicznie lub
        mailowo.
      </p>
      <p>
        Możesz także skorzystać z formularza dostępnego{" "}
        <Link to={"/kontakt"}>
          <strong>tutaj</strong>
        </Link>
      </p>
      <p>
        Zapraszamy do{" "}
        <Link to={"/sklep"}>
          <strong>naszego sklepu</strong>
        </Link>
        , gdzie oferujemy wynajem pojazdu z kierowcą na imprezy, dyspozycyjność
        na życzenie i inne usługi dostosowane do Twoich potrzeb.
      </p>

      <FAQContainer>
        <FAQHeader>FAQ</FAQHeader>
        <FAQItem
          question="Jakie są zasady rezerwacji?"
          isOpen={openIndex === 0}
          onClick={() => toggleFAQ(0)}
        >
          Rezerwacje potwierdzamy telefonicznie lub mailowo.
        </FAQItem>
        <FAQItem
          question="Czy wymagana jest zaliczka?"
          isOpen={openIndex === 1}
          onClick={() => toggleFAQ(1)}
        >
          W zależności od usługi, zaliczka może być wymagana.
        </FAQItem>
        <FAQItem
          question="Jakie są godziny dostępności?"
          isOpen={openIndex === 2}
          onClick={() => toggleFAQ(2)}
        >
          Jesteśmy dostępni 24/7.
        </FAQItem>
      </FAQContainer>
    </ModalContent>
  );
}

export default OrderForm;
