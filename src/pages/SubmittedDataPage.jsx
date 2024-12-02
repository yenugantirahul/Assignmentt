import React from "react";
import SubmittedDataTable from "../components/SubmittedDataTable"; // Import the card component

function SubmittedDataPage({ formData }) {
  return (
    <div>
      <h2>Submitted Data</h2>
      <SubmittedDataTable data={formData} /> {/* Use the card component here */}
    </div>
  );
}

export default SubmittedDataPage;
