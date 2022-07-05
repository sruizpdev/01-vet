import Paciente from "./Paciente";

function ListadoPacientes({ pacientes }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen overflow-y-auto">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-center mt-5 mb-10 text-lg">
        Aministra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>
      {pacientes.map((paciente) => (
        <Paciente key={paciente.id} paciente={paciente} />
      ))}
    </div>
  );
}

export default ListadoPacientes;
