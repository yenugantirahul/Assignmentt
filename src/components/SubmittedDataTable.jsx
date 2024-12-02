import React from "react";
import "../styles/DataTable.css"; // Import CSS for styling

const SubmittedDataTable = ({ data }) => {
  return (
    <div className="submitted-data-table">
      {data.length > 0 ? (
        <div className="card-container">
          {data.map((entry, index) => (
            <div className="card" key={index}>
              <h3>Submission {index + 1}</h3>
              <div className="card-content">
                {Object.entries(entry).map(([key, value]) => (
                  <div className="card-item" key={key}>
                    <strong>{key}:</strong> {value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-data">
          <p>No data submitted yet.</p>
        </div>
      )}
    </div>
  );
};

export default SubmittedDataTable;
