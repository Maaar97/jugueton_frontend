const CarrouselItem = (props) => {
  return (
    <div className={props.index === 0 ? "carousel-item active" : "carousel-item"}>
      {/* <img src={props.image} className="d-block w-100" alt="" /> */}
      <div className="carousel-item-content d-block">
        <div className="carrousel-item-img" style={{ backgroundImage: `url(${props.image})`}}></div>
        <p><strong>{ props.name }</strong></p>
        <p>
          { props.description } - { props.brand }
          <br />
          <strong className="product-price">{ props.price }</strong>
        </p>
        <a href={ props.link }><button>Ver más</button></a>
      </div>
    </div>
  );
}

export default CarrouselItem;