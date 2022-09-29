const Footer = (props) => {
  return (
    <footer className="footer">
      <p className="slogan">¡Vamos a jugar!</p>
      <div className="footer-grid">
        <div className="footer-grid-item b-corp">
          <img src={ props.logos.empresaB } alt="" />
        </div>
        <div className="footer-grid-item footer-about-us">
          <strong>SOBRE NOSOTROS</strong>
          <ul>
            <li>
              <a href="https://www.cemaco.com/jugueton/super-club">Super Club</a>
            </li>
            <li>
              <a href="https://grupocemaco.com/guatenuestrohogar">Guate Nuestro Hogar</a>
            </li>
            <li>
              <a href="https://www.cemaco.com/tiendas">Nuestras Tiendas</a>
            </li>
          </ul>
        </div>
        <div className="footer-grid-item corp-links">
          <strong>HERMANITOS</strong>
          <ul>
            <li><img src={ props.logos.bebeJugueton} alt="" /></li>
            <li><img src={ props.logos.cemaco} alt="" /></li>
          </ul>
        </div>
        <div className="footer-grid-item footer-contact">
          <strong>CONTÁCTANOS</strong>
          <ul>
            <li className="contact-link">
              <a href="tel:+50224999990" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-envelope"></i> tusamigos@jugueton.com
              </a>
            </li>
            <li className="contact-link">
              <a href="mailto:tusamigos@cemaco.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-phone"></i> 2499-9999
              </a>
            </li>
            <li className="social-media-links">
              <a className="social-media-link" href="https://www.facebook.com/cemacogt/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="social-media-link" href="https://www.pinterest.com/cemacoguatemala/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-pinterest"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <span>&#169;</span> COPYRIGHT 2022 JUGUETÓN GUATEMALA - TODOS LOS DERECHOS RESERVADOS
      </div>
    </footer>
  );
}

export default Footer;