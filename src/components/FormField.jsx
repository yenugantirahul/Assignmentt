// src/components/FormField.js
import React from "react";

const FormField = ({ field, register, errors }) => {
  return (
    <div className="form-field">
      <label>{field.label}</label>
      {field.type === "dropdown" ? (
        <select {...register(field.name, { required: field.required })}>
          <option value="">Select...</option>
          {field.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          {...register(field.name, { required: field.required })}
        />
      )}
      {errors[field.name] && (
        <span className="error">This field is required</span>
      )}
    </div>
  );
};

export default FormField;
