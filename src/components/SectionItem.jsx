const SectionItem = (props) => {
  return (
    <div className="section-item">
      <a href={props.link}>
        <img src={props.backgroundImage} alt="" className="section-item-img"/>
        <div className="section-item-content">
          { props.brand && <img src={ props.brand } alt="" /> }
          { props.category && (
            <p>
              <span className="section-item-category">{ props.category }</span>
              <br />
            </p>
          )}
          { props.description && (
            <span className="section-item-description">{ props.description }</span>
          )}
          { (props.brand || props.category) && <p>{"Ver más >"}</p>}
          { props.description && <p>{"Conoce más aquí"}</p>}
        </div>
      </a>
    </div>
  );
}

export default SectionItem;