import React from "react";
import "./index.css";
import { options } from "../Form/index";

export const Teams = ({ data }) => {
  // Objeto para agrupar os cards por team
  const groupedTeams = {};

  // Agrupar os membros por team
  data.forEach((member) => {
    const option = options.find((option) => option.value === member.team);

    if (option) {
      if (!groupedTeams[member.team]) {
        groupedTeams[member.team] = {
          option: option,
          members: [],
        };
      }
      groupedTeams[member.team].members.push(member);
    }
  });

  return (
    <>
      <h1 className="title-2">Minha Organização:</h1>
      <div>
        {Object.entries(groupedTeams).map(([team, { option, members }]) => (
          <div
            key={team}
            className="option-container"
            style={{
              backgroundColor: option.background,
              "--highlight-color": option.highlight, // Define a variável CSS para o destaque
            }}
          >
            <h2 className="option-title">{team}</h2>
            <div className="container-2">
              {members.map((member, index) => (
                <div key={index} className="card">
                  <img src={member.image} alt={member.name} />
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                  <p>{member.team}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
