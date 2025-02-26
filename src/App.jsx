import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Contact from "./layouts/Contact";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
