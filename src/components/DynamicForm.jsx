import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import ProgressBar from "./ProgressBar";

function DynamicForm({ formType, setFormData }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [progress, setProgress] = useState(0); // State for progress

  const formStructure = {
    userInfo: {
      fields: [
        {
          name: "firstName",
          type: "text",
          label: "First Name",
          required: true,
        },
        { name: "lastName", type: "text", label: "Last Name", required: true },
        { name: "age", type: "number", label: "Age", required: false },
      ],
    },
    addressInfo: {
      fields: [
        { name: "street", type: "text", label: "Street", required: true },
        { name: "city", type: "text", label: "City", required: true },
        {
          name: "state",
          type: "dropdown",
          label: "State",
          options: ["California", "Texas", "New York"],
          required: true,
        },
        { name: "zipCode", type: "text", label: "Zip Code", required: false },
      ],
    },
    paymentInfo: {
      fields: [
        {
          name: "cardNumber",
          type: "text",
          label: "Card Number",
          required: true,
        },
        {
          name: "expiryDate",
          type: "date",
          label: "Expiry Date",
          required: true,
        },
        { name: "cvv", type: "password", label: "CVV", required: true },
        {
          name: "cardholderName",
          type: "text",
          label: "Cardholder Name",
          required: true,
        },
      ],
    },
  };

  const onSubmit = (data) => {
    setFormData((prevData) => [...prevData, data]);
    reset(); // Reset the form fields after submission
    setProgress(100); // Set progress to 100% after submission
    setTimeout(() => setProgress(0), 2000); // Reset progress after 2 seconds
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dynamic-form">
      {formType &&
        formStructure[formType] &&
        formStructure[formType].fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            register={register}
            errors={errors}
          />
        ))}
      <ProgressBar progress={progress} /> {/* Pass progress to ProgressBar */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;
