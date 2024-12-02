import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import DynamicForm from "./components/DynamicForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SubmittedDataPage from "./pages/SubmittedDataPage";
import "./index.css";

const App = () => {
  const [formData, setFormData] = useState([]);
  const [formType, setFormType] = useState("");

  const handleFormTypeChange = (event) => {
    setFormType(event.target.value);
  };

  return (
    <div className="app">
      <Header />
      <nav>
        <Link className="home-link" to="/">
          Home
        </Link>
        <Link className="data-link" to="/submitted-data">
          View Submitted Data
        </Link>
      </nav>
      <div className="form-selector">
        <label>Select Form Type:</label>
        <select onChange={handleFormTypeChange} value={formType}>
          <option value="">Select...</option>
          <option value="userInfo">User Information</option>
          <option value="addressInfo">Address Information</option>
          <option value="paymentInfo">Payment Information</option>
        </select>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <DynamicForm formType={formType} setFormData={setFormData} />
          }
        />
        <Route
          path="/submitted-data"
          element={<SubmittedDataPage formData={formData} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
