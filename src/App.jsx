import Form from "./components/Form";
import Header from "./components/Header";
import Patients from "./components/Patients";

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <Form />
      <Patients />
    </div>
  );
}

export default App;
