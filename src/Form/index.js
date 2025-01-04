import "./index.css";
import { Button } from "../ui/Button";
import { useState } from "react";
import { Teams } from "../Teams";
import Color from "color";

const labels = [
  { label: "Nome", type: "text", name: "name", placeholder: "Digite seu nome" },
  {
    label: "Cargo",
    type: "text",
    name: "role",
    placeholder: "Digite seu cargo",
  },
  {
    label: "Imagem",
    type: "text",
    name: "image",
    placeholder: "Informe seu endereço da imagem",
  },
];

const labels2 = [
  {
    label: "Nome",
    type: "text",
    name: "nameTeam",
    placeholder: "Digite o nome do time.",
  },
  {
    label: "Cor",
    type: "color",
    name: "color",
    placeholder: "Digite sua cor",
  },
];

// export const options = [
//   { value: "" },
//   { value: "Programação", background: "#D9F7E9", highlight: "#57C278" },
//   { value: "Front-End", background: "#E8F8FF", highlight: "#82CFFA" },
//   { value: "Data Science", background: "#F0F8E2", highlight: "#A6D157" },
//   { value: "DevOps", background: "#FDE7E8", highlight: "#E06B69" },
//   { value: "UX e Design", background: "#FAE9F5", highlight: "#DB6EBF" },
//   { value: "Mobile", background: "#FFF5D9", highlight: "#FFBA05" },
//   { value: "Inovação e Gestão", background: "#FFEEDF", highlight: "#FF8A29" },
// ];

export const Form = () => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    image: "",
    team: "",
  });

  const [options, setOptions] = useState([
    { value: "" }
  ]);

  const [data, setData] = useState([]);

  const handleChangue = (e, name) => {
    const key = e.target.name === "" ? name : e.target.name;
    setForm({ ...form, [key]: e.target.value });
  };

  const handleDelete = (memberToDelete) => {
    setData((prevData) => prevData.filter(member => member !== memberToDelete));
  };


  return (
    <>
      <section className="container form-container">
        <div className="box">
          <h1 className="title">
            Preencha os dados para criar o card de colaborador.
          </h1>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Evita o comportamento padrão do formulário
              setData((prevData) => [...prevData, form]);
              setForm({ name: "", role: "", image: "", team: "" });
            }}
          >
            {labels.map((label, index) => (
              <label key={index}>
                {`${label.label}:`}
                <input
                  type={label.type}
                  name={label.name}
                  placeholder={label.placeholder}
                  onChange={(e) => {
                    handleChangue(e);
                  }}
                  value={form[label.name]}
                />
              </label>
            ))}

            <label>
              Time:
              <select onChange={(e) => handleChangue(e, "team")}>
                {options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.value}
                  </option>
                ))}
              </select>
              <Button type="submit" />
            </label>
          </form>
        </div>
        <div className="box">
          <h1 className="title">Preencha os dados para criar um novo time.</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault(); // Evita o comportamento padrão do formulário
              const nameTeam = e.target.elements.nameTeam.value;
              const highlight = Color(e.target.elements.color.value)
                .rgb()
                .string();
              const background = Color(e.target.elements.color.value)
                .alpha(0.4)
                .rgb()
                .string();
              const newTeam = { value: nameTeam, background, highlight };
              setOptions((prevOptions => [...prevOptions, newTeam]));
            }}
          >
            {labels2.map((label, index) => (
              <label key={index}>
                {`${label.label}:`}
                <input
                  type={label.type}
                  name={label.name}
                  placeholder={label.placeholder}
                  onChange={(e) => {
                    handleChangue(e);
                  }}
                  value={form[label.name]}
                />
              </label>
            ))}

            <label>
              <Button type="submit" />
            </label>
          </form>
        </div>
      </section>
      <Teams data={data} options={options} handleDelete={handleDelete} />
    </>
  );
};
