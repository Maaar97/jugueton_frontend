/* import { CarrouselItem } from "../components";
import $ from "jquery"; */
import { useState, useEffect } from "react";
import axios from "axios";

const Carrousel = (props) => {
  const baseURL = "http://localhost:8000/api/";
  const [carouselItems, setCarouselItems] = useState(null);
  /* const [scrollPosition, setScrollPosition] = useState(0);
  const [widthData, setWidthData] = useState({
    carouselWidth: 0,
    cardWidth: 0
  }); */

  useEffect(() => {
    axios.get(baseURL + "products/" + props.productType).then((response) => {
      setCarouselItems(response.data);
    })
  }, []);

  /* useEffect(() => {
    if(carouselItems) {
      var _carouselWidth = $(".carousel-inner")[0].scrollWidth;
      var _cardWidth = $(".carousel-item").width();
      setWidthData({
        carouselWidth: _carouselWidth,
        cardWidth: _cardWidth
      });
      
      $(".carousel-control-next").on("click", function () {
        if (scrollPosition < (_carouselWidth - _cardWidth * 4)) {
          setScrollPosition(scrollPosition + _cardWidth);
          $(".carousel-inner").animate({ scrollLeft: scrollPosition + _cardWidth },600);
        }
      });
    
      $(".carousel-control-prev").on("click", function () {
        if (scrollPosition > 0) {
          setScrollPosition(scrollPosition - _cardWidth);
          $(".carousel-inner").animate(
            { scrollLeft: scrollPosition - _cardWidth },
            600
          );
        }
      });
    }
  }, [carouselItems]); */

  return (
    <div className="carrousel" style={{ backgroundImage: `url(${props.backgroundImage})`}}>
      <div className="carrousel-banner">
        <h2>{ props.title }</h2>
        <h3>{ props.subtitle }</h3>
      </div>
      { carouselItems && (
        <div id={props.id} className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {
              carouselItems.map((item, index) => {
                return <div key={"carousel-item-" + (index+1)} className={index === 0 ? "carousel-item active" : "carousel-item"}>
                  <div className="card">
                    <img src={item.image} alt="" className="product-img d-block w-50" />
                    <div className="card-body">
                      <p className="product-brand">{ item.brand }</p>
                      <p className="product-name">{index + 1}. { item.name }</p>
                      <p className="product-price">{ item.price }</p>
                      <a href={item.link} className="btn btn-success">Ver más</a>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target={"#" + props.id} data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target={"#" + props.id} data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Carrousel;