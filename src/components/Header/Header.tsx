import "./styles.scss";
import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import close from "../../assets/img/close.png";

const Header = () => {
  return (
    <header>

      <div className="logo-box">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="tittle">CoreNotes</h1>
      </div>

      <div className="search">
        <img src={search} alt="icon search" className="icon-search" />
        <input type="text" placeholder="Pesquisar notas"  />
      </div>

      <img src={close} alt="close icon" className="close-btn" />

    </header>
  );
};

export default Header;
