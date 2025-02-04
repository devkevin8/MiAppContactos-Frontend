import { useState } from "react";
import axios from "axios";
import { url } from "../../env";
import Select from "react-select";

const Formulario = () => {
  const { form, setForm } = useState({
    id: 0,
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, form);
    console.log(response);
  };

  return (
    <div
      id="form"
      className="flex flex-col items-center justify-center w-full p-6"
    >
      <p></p>
      <h1>Agregar Contacto</h1>
      <p></p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Apellido
          </label>
          <input type="text" className="form-control" id="lastName" />
        </div>
        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">
            Telefono
          </label>
          <input type="text" className="form-control" id="phone" />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoTelefono" className="form-label">
            Tipo de Telefono
          </label>
          <Select
            options={[
              { value: "1", label: "One" },
              { value: "2", label: "Two" },
              { value: "3", label: "Three" },
            ]}
            className="text-center"
            placeholder="Open this select menu"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Formulario;
