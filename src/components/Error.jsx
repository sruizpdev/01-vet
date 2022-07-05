import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-800 text-center text-white uppercase p-3 font-bold mb-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
