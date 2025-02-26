import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Contact from "./layouts/Contact";
import ProductList from "./components/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<MainLayout />}
        />
        <Route
          path="kontakt"
          element={<Contact />}
        />
        <Route
          path="/sklep"
          element={<ProductList />}
        />
        <Route
          path="/sklep/:id/:name"
          element={<ProductList />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
