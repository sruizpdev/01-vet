import React from "react";

const Paciente = () => {
  return (
    <div className="bg-white px-5 m-3 py-10 rounded-md">
      <p className="uppercase font-bold text-gray-700 mb-3">
        Nombre: <span className="font-normal normal-case">Coopercin</span>
      </p>{" "}
      <p className="uppercase font-bold text-gray-700 mb-3">
        Propietario: <span className="font-normal normal-case">Sergio</span>
      </p>{" "}
      <p className="uppercase font-bold text-gray-700 mb-3">
        email:{" "}
        <span className="font-normal normal-case">correo@correo.com</span>
      </p>{" "}
      <p className="uppercase font-bold text-gray-700 mb-3">
        Fecha:{" "}
        <span className="font-normal normal-case">1 de diciembre de 2022</span>
      </p>{" "}
      <p className="uppercase font-bold text-gray-700 mb-3">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          El gato no come. Sólo duerme
        </span>
      </p>
    </div>
  );
};

export default Paciente;
