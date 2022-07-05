const Paciente = ({ paciente, key }) => {
  console.log(key);
  const { nombre, propietario, email, fecha, sintomas } = paciente;
  return (
    <div className="bg-white px-5 m-3 py-10 rounded-md">
      <p className="uppercase font-bold text-gray-700 mb-3">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>{" "}
      <p className="uppercase font-bold text-gray-700 mb-3">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>{" "}
      <p className="uppercase font-bold text-gray-700 mb-3">
        email: <span className="font-normal normal-case">{email}</span>
      </p>{" "}
      <p className="uppercase font-bold text-gray-700 mb-3">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>{" "}
      <p className="uppercase font-bold text-gray-700 mb-3">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>
    </div>
  );
};

export default Paciente;
