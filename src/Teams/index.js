import React, { useState, useEffect } from "react";
import "./index.css";
import Color from "color";

export const Teams = ({ data, options, handleDelete }) => {
  // Função para gerar uma cor aleatória em formato hexadecimal
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Função para criar cores iniciais para um time
  const createTeamColors = (baseColor) => {
    const color = Color(baseColor);
    return {
      background: color.rgb().string(),
      highlight: color.alpha(0.4).rgb().string()
    };
  };

  // Função para agrupar os membros por team
  const groupTeams = (data) => {
    const grouped = {};
    data.forEach((member) => {
      const option = options.find((option) => option.value === member.team);
      if (option) {
        if (!grouped[member.team]) {
          // Se o time já tem cor definida nas options, usa ela, senão gera uma nova
          const initialColor = option.color || generateRandomColor();
          const colors = createTeamColors(initialColor);
          
          grouped[member.team] = {
            option: { 
              ...option,
              background: colors.background,
              highlight: colors.highlight,
              color: initialColor // Mantém a cor original
            },
            members: [],
          };
        }
        grouped[member.team].members.push(member);
      }
    });
    return grouped;
  };

  // Estado inicial usando a função de agrupamento
  const [teams, setTeams] = useState(() => groupTeams(data));

  // Atualizar teams quando data mudar
  useEffect(() => {
    setTeams(groupTeams(data));
  }, [data, options]);

  const handleChangue = (e, team) => {
    const colorValue = e.target.value;
    const colors = createTeamColors(colorValue);

    setTeams((prevTeams) => ({
      ...prevTeams,
      [team]: {
        ...prevTeams[team],
        option: {
          ...prevTeams[team].option,
          color: colorValue,
          background: colors.background,
          highlight: colors.highlight,
        },
      },
    }));
  };

  const handleMemberDelete = (member) => {
    handleDelete(member);
  };

  return (
    <>
      <h1 className="title-2">Minha Organização:</h1>
      <div>
        {Object.entries(teams).map(([team, { option, members }]) => (
          <div
            key={team}
            className="option-container"
            style={{
              backgroundColor: option.highlight,
              "--highlight-color": option.background,
            }}
          >
            <input
              type="color"
              name="color"
              placeholder="color"
              onChange={(e) => handleChangue(e, team)}
              value={option.color || "#000000"}
              className="cor"
            />
            <h2 className="option-title">{team}</h2>
            <div className="container-2">
              {members.map((member, index) => (
                <div key={member.id || index} className="card">
                  <p
                    onClick={() => handleMemberDelete(member)}
                    style={{ cursor: "pointer", color: "red" }}
                  >
                    Excluir
                  </p>
                  <img src={member.image} alt={member.name} />
                  <h2>{member.name}</h2>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};