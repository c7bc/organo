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
        <div className="icons">
          {icons.map((icon, index) => (
            <li key={index}>
              <img src={icon.url} alt={`Ícone ${index + 1}`} />
            </li>
          ))}
        </div>
        <div>
          <img className="logo" src={logo} alt={"Logo"} />
        </div>
        <a href="https://github.com/devnerii"><p>
            Desenvolvido por Daniel Neri
            </p></a>
      </div>
    </footer>
  );
};