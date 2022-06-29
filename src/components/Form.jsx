function Form() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-center text-3xl">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-md py-5 px-5">
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
      </form>
    </div>
  );
}

export default Form;
