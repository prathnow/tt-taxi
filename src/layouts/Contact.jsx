import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import HeadingElement from "../ui/HeadingElement";
import { MdLocalPhone } from "react-icons/md";
import Logo from "../ui/Logo";
import { SinglePageLayout } from "../ui/SinglePageLayout";

const ContactLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  text-align: center;
  background-color: #f9f9f9;
`;

const MapContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 3rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  width: 90%;
  margin: 5rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const Phone = styled.a`
  display: block;
  font-size: 2.2rem;
`;

const ContactInfo = styled.div`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #333;
  p {
    margin: 0.5rem 0;
  }
  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
`;

function Contact() {
  return (
    <ContactLayoutContainer>
      <Header />
      <SinglePageLayout>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2565.2541181436613!2d20.077175!3d49.98784500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716411ab7aa8b81%3A0x4037aeb7f93f9e83!2s24h%20TT%20TAXI%20Wieliczka!5e0!3m2!1spl!2spl!4v1739900942951!5m2!1spl!2spl"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
        <div>
          <HeadingElement tag="h2">
            CZEKAMY NA TWÓJ TELEFON 24/7H
            <Phone href="tel:+48537375008">
              Taxi Wieliczka <MdLocalPhone /> +48 537 375 008
            </Phone>
          </HeadingElement>
        </div>
        <ContactContainer>
          <ContactInfo>
            <Logo
              size="medium"
              style={{ margin: "3rem 0" }}
            />
            <HeadingElement tag="h3">24h TT TAXI Wieliczka</HeadingElement>
            <p>Niepołomska 17b</p>
            <p>32-020 Wieliczka</p>
            <p>
              <a href="tel:+48537375008">+48 537 375 008</a>
            </p>
            <p>
              <a href="mailto:tt24taxi@gmail.com">tt24taxi@gmail.com</a>
            </p>
          </ContactInfo>
          <ContactForm />
        </ContactContainer>
      </SinglePageLayout>
      <Footer />
    </ContactLayoutContainer>
  );
}

export default Contact;
