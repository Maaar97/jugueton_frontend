const Banner = (props) => {
  const bannerStyle = {
    margin: props.expanded ? 0 : "15px"
  };

  const linkStyle = {
    alignItems: props.children ? "flex-start !important" : "center"
  };

  return (
    <div className="banner" style={ bannerStyle }>
      <a href={ props.link } rel="noopener noreferrer" style={ linkStyle }>
        <img className="banner-img" src={props.backgroundImage} alt="" />
        { !props.hideButton && <button type="button">Compra aquí</button> }
        { props.children }
      </a>
    </div>
  );
}

export default Banner;