import { useState } from "react";
import styled from "styled-components";
import HeadingElement from "../ui/HeadingElement";

const Form = styled.form`
  width: 100%;
  max-width: 60rem;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: #fff;
`;

const Label = styled.label`
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
  height: 10rem;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.25rem;
  &:disabled {
    background-color: #ccc;
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 1.2rem;
`;

const SuccessText = styled.p`
  color: green;
  font-size: 1.2rem;
`;

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Imię jest wymagane";
    if (!formData.email) newErrors.email = "Email jest wymagany";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Nieprawidłowy email";
    if (!formData.message) newErrors.message = "Wiadomość nie może być pusta";
    else if (formData.message.length < 15)
      newErrors.message = "Wiadomość musi mieć min. 15 znaków";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const response = await fetch("send_mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSuccess("Wiadomość została wysłana");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Wystąpił błąd. Spróbuj ponownie.");
      }
    } catch (error) {
      setSuccess("Błąd serwera. Spróbuj później");
    }
    setTimeout(() => {
      setSuccess("");
    }, 2000);
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <HeadingElement tag="h2">Formularz kontaktowy</HeadingElement>
      <Label>Imię i nazwisko</Label>
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <ErrorText>{errors.name}</ErrorText>}
      <Label>Adres email</Label>
      <Input
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}
      <Label>Wiadomość</Label>
      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <ErrorText>{errors.message}</ErrorText>}
      <Button
        type="submit"
        disabled={loading}
      >
        {loading ? "Wysyłanie..." : "Wyślij"}
      </Button>
      {success && <SuccessText>{success}</SuccessText>}
    </Form>
  );
}

export default ContactForm;
