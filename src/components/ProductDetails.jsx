import styled from "styled-components";
import useProduct from "../hooks/useProduct";
import { useEffect } from "react";

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 3rem;
  margin: 2rem auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  text-align: left;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const ProductName = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #007bff;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ProductDesc = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
  & > p {
    margin-top: 1.2rem;
  }
`;

const BuyButton = styled.a`
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 1rem;
  text-align: center;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const BackButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #cc0000;
  }
`;

function ProductDetails({ productId, onBack }) {
  const { fetchProductDetails } = useProduct();
  const product = fetchProductDetails(productId);

  useEffect(() => {
    if (product) {
      document.title = product.name; // Ustaw tytuł strony na nazwę produktu
    }
  }, [product]);

  if (!product) return <p>Nie znaleziono produktu</p>;

  return (
    <ProductDetailsContainer>
      <ProductImage
        src={product.image}
        alt={product.name}
      />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>
          <strong>
            {product.price} {product.currency}
          </strong>
        </ProductPrice>
        <ProductDesc
          dangerouslySetInnerHTML={{
            __html: `<strong>Opis:</strong> ${
              product.description || "Brak opisu produktu."
            }`,
          }}
        />
        <BuyButton
          href={product.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Przejdź do zakupu
        </BuyButton>
        <BackButton onClick={onBack}>Powrót do listy</BackButton>
      </ProductInfo>
    </ProductDetailsContainer>
  );
}

export default ProductDetails;
