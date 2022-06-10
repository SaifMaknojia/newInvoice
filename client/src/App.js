import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/homePage/HomePage";
import InvoiceDetailPage from "./pages/InvoiceDetailPage/InvoiceDetailPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/:id" element={<InvoiceDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
