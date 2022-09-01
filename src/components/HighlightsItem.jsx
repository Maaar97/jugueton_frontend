const HighlightsItem = (props) => {
  return (
    <div className="highlights-item">
      <div className="highlight-item-image"><img src={ props.image } alt="" width="100%"/></div>
      <div className="highlight-item-content">
        <h3>{ props.title }</h3>
        <p>{ props.description }</p>
        <a href={ props.link }>Ver más</a>
      </div>
    </div>
  )
}

export default HighlightsItem;