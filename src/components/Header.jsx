import { CovidBanner } from "../components";

const Header = (props) => {
  return (
    <header className="header">
      <CovidBanner cemacoLogo={ props.logos.cemaco } bebeJuguetonLogo={ props.logos.bebeJugueton } />
      <nav className="nav-bar">
        <a href="https://www.cemaco.com/jugueton" className="nav-bar-brand">
          <img src={ props.logos.jugueton } alt="Jugueton logo" className="brand-logo"/>
        </a>
        <div className="nav-bar-search">
          <form action="" className="search-bar">
            <input id="search" type="text" placeholder="Buscar..." name="search" />
            <button type="submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className="nav-bar-right">
          <ul className="nav-bar-menu">
            <li className="nav-bar-menu-item nav-bar-account">
              <span>
                Hola, <strong>María Andrea</strong>
              </span>
              <i className="fa-solid fa-user"></i>
            </li>
            <li className="nav-bar-menu-item">
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;