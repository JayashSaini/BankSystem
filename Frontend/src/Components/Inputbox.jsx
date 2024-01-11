import React from "react";

const InputBox = ({ label, type = "text", value, onchange,id,placeholder}) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="username"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        className="mt-1 block p-1 w-full rounded border-gray-300 shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
        placeholder={placeholder}
        value={value}
        onChange={onchange}
        required
      />
    </div>
  );
};

export default InputBox;
