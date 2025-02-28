import { useEffect, useState } from "react";
import useProduct from "../hooks/useProduct";
import styled from "styled-components";
import ProductDetails from "./ProductDetails";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate, useLocation } from "react-router";
import ScrollToTopButton from "../ui/ScrollToTopButton";
import { SinglePageLayout } from "../ui/SinglePageLayout";

const ProductHeadingList = styled.h1`
  font-size: 2.4rem;
`;

const ProductListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f9f9f9;
  padding: 0;
`;

const ProductGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 0;
  margin: 2.5rem 0;
  list-style: none;
`;

const ProductItem = styled.li`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;
  height: 25rem;
  aspect-ratio: auto;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const ProductName = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
  margin-bottom: 1rem;
  margin-top: auto;
  align-self: center;
`;

const ProductPriceValue = styled.p`
  color: #007bff;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const LoadMoreButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 2rem;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductMore = styled.a`
  display: inline-block;
  background-color: #e5a000;
  color: white;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

function ProductList() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    products = [],
    fetchPaginatedProducts,
    error,
    loading,
  } = useProduct();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const PRODUCTS_PER_PAGE = 8;

  const handleLoadMore = () => {
    setCurrentIndex((prevIndex) => prevIndex + PRODUCTS_PER_PAGE);
  };

  const handleProductClick = (productId, productName) => {
    const product = products.find((p) => p.id === productId);
    const formattedName = encodeURIComponent(
      productName.replace(/\s+/g, "-").toLowerCase()
    );
    if (product) {
      setSelectedProduct(productId); // Ustawia wybrany produkt
      navigate(`/sklep/${productId}/${formattedName}`); // Zmiana adresu URL
    } else {
      console.error(`Produkt o ID ${productId} nie istnieje.`);
    }
  };

  document.previousTitle = document.title;

  const handleBackToList = () => {
    setSelectedProduct(null);
    navigate("/sklep");
    document.title = document.previousTitle;
  };

  useEffect(() => {
    const parts = location.pathname.split("/");
    const productId = parts[parts.length - 2];

    if (productId && productId !== "sklep") {
      const productExists = products.some((p) => p.id === productId);
      if (productExists) {
        setSelectedProduct(productId);
      } else {
        setSelectedProduct(null);
      }
    } else {
      setSelectedProduct(null);
    }
  }, [location.pathname, products]);

  // if (loading) return <p>Ładowanie produktów...</p>;
  // if (error) return <p style={{ color: "red" }}>{error}</p>;

  const visibleProducts = fetchPaginatedProducts(
    0,
    currentIndex + PRODUCTS_PER_PAGE
  );

  return (
    <ProductListContainer>
      <Header />
      <SinglePageLayout>
        {selectedProduct ? (
          <ProductDetails
            productId={selectedProduct}
            onBack={handleBackToList}
          />
        ) : (
          <>
            <ProductHeadingList>Lista produktów</ProductHeadingList>
            {loading ? <p>Ładowanie produktów...</p> : ""}
            {error ? <p style={{ color: "red" }}>{error}</p> : ""}
            <ProductGrid>
              {visibleProducts.map((product) => (
                <ProductItem key={product.id}>
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                  />
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>
                    <ProductPriceValue>{product.price}</ProductPriceValue>
                    <ProductMore
                      onClick={() =>
                        handleProductClick(product.id, product.name)
                      }
                    >
                      Zobacz produkt
                    </ProductMore>
                  </ProductPrice>
                </ProductItem>
              ))}
            </ProductGrid>
            {currentIndex + PRODUCTS_PER_PAGE < products.length && (
              <LoadMoreButton onClick={handleLoadMore}>
                Załaduj więcej
              </LoadMoreButton>
            )}
          </>
        )}
      </SinglePageLayout>
      <Footer />
      <ScrollToTopButton />
    </ProductListContainer>
  );
}

export default ProductList;
