import "./index.css";
import twitter from "../images/tw.png";
import facebook from "../images/fb.png";
import instagram from "../images/ig.png";
import logo from "../images/logo.png";

const icons = [
  {
    url: twitter,
  },
  {
    url: facebook,
  },
  {
    url: instagram,
  },
];

export const Footer = () => {
  return (
    <footer>
      <div className="container center">
        <ul>
          {icons.map((icon, index) => (
            <li key={index}>
              <img src={icon.url} alt={`Ícone ${index + 1}`} />
            </li>
          ))}
          <li>
            <img  className="logo" src={logo} alt={"Logo"} />
          </li>
        </ul>
      </div>
    </footer>
  );
};
