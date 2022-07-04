function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-md py-5 px-5">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-md"
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del propietario
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-md"
            type="text"
            id="propietario"
            placeholder="Nombre del propietario"
          />
        </div>{" "}
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-md"
            type="email"
            id="email"
            placeholder="Email del propietario"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta
          </label>
          <input
            className="border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-md"
            type="date"
            id="alta"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 w-full p-2 mt-2 placeholder-indigo-600 rounded-md"
            type="text"
            id="sintomas"
            placeholder="Describe los sintomas"
          />
        </div>
        <input
          className="bg-indigo-600 text-white p-3 uppercase font-bold w-full hover:bg-indigo-800 cursor-pointer"
          type="submit"
          value="Agregar sintoma"
        />
      </form>
    </div>
  );
}

export default Formulario;
