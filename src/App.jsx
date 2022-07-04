import Form from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes"; 

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-10 md:flex">
        <Form />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;
