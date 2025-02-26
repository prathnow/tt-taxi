import axios from "axios";
import { useEffect, useState } from "react";

export function useProduct() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchAllProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get("/data.json");

      setProducts(response.data.taxiServices || []);
    } catch (err) {
      setError("Nie udało się pobrać produktów.");
    } finally {
      setLoading(false);
    }
  };

  const fetchPaginatedProducts = (start, limit) => {
    return products.slice(start, start + limit);
  };

  const fetchProductDetails = (productId) => {
    return products.find((product) => product.id === productId) || null;
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return {
    products,
    fetchAllProducts,
    fetchPaginatedProducts,
    fetchProductDetails,
    error,
    loading,
  };
}

export default useProduct;
