const CovidBanner = (props) => {
    return (
        <div className="covid-banner">
            <span>
                Hemos adoptado medidas debido al COVID19 para ti y nuestro equipo <a href="https://www.cemaco.com/prevencion">ver más</a>
            </span>
            <div className="header-links">
                <a href="https://www.cemaco.com/" target="_blank" rel="noopener noreferrer">
                    <img src={ props.cemacoLogo } className="header-link-img" alt="" />
                </a>
                <a href="https://www.cemaco.com/bebe-jugueton" target="_blank" rel="noopener noreferrer">
                    <img src={ props.bebeJuguetonLogo } className="header-link-img" alt="" />
                </a>
            </div>
        </div>
    );
}

export default CovidBanner;