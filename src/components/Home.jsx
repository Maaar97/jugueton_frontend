import {
  Banner,
  Highlights,
  Carrousel,
  Section,
  DepartmentList
} from "../components";
import { useMediaQuery } from "../utils/useMediaQuery";

const Home = (props) => {
  const isPageWide = useMediaQuery('(min-width: 800px)');

  
  return (
    <div className="content">
      <Banner expanded
        backgroundImage={ isPageWide ? props.banners.mainBanner.desktopImage : props.banners.mainBanner.mobileImage }
        link={ props.banners.mainBanner.link } />
      <Highlights highlights={ props.highlights }/>
      <Carrousel id="mainCarousel" title={ props.carousels.mainCarousel.title } subtitle={ props.carousels.mainCarousel.subtitle } productType={ props.carousels.mainCarousel.productType } backgroundImage={ isPageWide ? props.carousels.mainCarousel.desktopImage : props.carousels.mainCarousel.mobileImage } />
      <Carrousel id="ofertasCarousel" title={ props.carousels.ofertasCarousel.title } subtitle={ props.carousels.ofertasCarousel.subtitle } productType={ props.carousels.ofertasCarousel.productType } backgroundImage={ isPageWide ? props.carousels.ofertasCarousel.desktopImage : props.carousels.ofertasCarousel.mobileImage } />
      <Banner backgroundImage={ isPageWide ? props.banners.descuentosBanner.desktopImage : props.banners.descuentosBanner.mobileImage }
        link={ props.banners.descuentosBanner.link } />
      <Section isPageWide={isPageWide} label={ props.sections.munecasSection.label } labelColor={ props.sections.munecasSection.labelColor } items={ props.sections.munecasSection.items }/>
      <Section isPageWide={isPageWide} columns={ props.sections.cemacoSection.columns } label={ props.sections.cemacoSection.label } items={ props.sections.cemacoSection.items } />
      <DepartmentList departments={ props.departments } />
      <Section isPageWide={isPageWide} label={ props.sections.figurasSection.label } labelColor={ props.sections.figurasSection.labelColor } items={ props.sections.figurasSection.items }/>
      <div className="department-banners">
        <Banner hideButton backgroundImage={ isPageWide ? props.banners.construccionBanner.desktopImage : props.banners.construccionBanner.mobileImage } link={ props.banners.construccionBanner.link }>
          <div className="banner-overlay">
            <p>Arma y construye</p>
            <span>Compra aquí</span>
          </div>
        </Banner>
        <Banner hideButton backgroundImage={ isPageWide ? props.banners.vehiculosBanner.desktopImage : props.banners.vehiculosBanner.mobileImage } link={ props.banners.vehiculosBanner.link }>
          <div className="banner-overlay">
            <p>Vehículos</p>
            <span>Compra aquí</span>
          </div>
        </Banner>
      </div>
      <Banner hideButton backgroundImage={ isPageWide ? props.banners.bebeBanner.desktopImage : props.banners.bebeBanner.mobileImage } link={ props.banners.bebeBanner.link } />
      <div className="compra-online">
        <a href={ props.banners.compraOnlineBanner.link }>
          <img src={ isPageWide ? props.banners.compraOnlineBanner.desktopImage : props.banners.compraOnlineBanner.mobileImage } alt="" />
          <div>
            <p>compra en línea y entregamos <br /> tu orden sin bajar de tu auto</p>
            <button>Mira cómo funciona</button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;