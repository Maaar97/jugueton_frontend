import { useState, useEffect } from "react";
import { SectionItem } from "../components";

const Section = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screenWidth]);

  const sectionItemsStyle = {
    gridTemplateColumns: screenWidth > 700 && screenWidth <= 1080
      ? `repeat(2, 1fr)`
      : screenWidth > 1080
        ? `repeat(${props.columns ?? 4}, 1fr)`
        : "1fr"
  };

  return (
    <div className="section">
      { props.label && <h2 className="section-label" style={{ color: props.labelColor ?? "black" }}>{ props.label }</h2> }
      <div className="section-items" style={sectionItemsStyle}>
        {
          props.items.map((item, index) => {
            const backgroundImage = item.cover
              ? props.isPageWide
                ? item.desktopImage
                : item.mobileImage
              : item.image;
            return <SectionItem
              key={'section-item-' + (index+1)}
              backgroundImage={backgroundImage}
              label={item.label}
              category={item.category}
              brand={item.brand}
              description={item.description}
              link={item.link}
            />
          })
        }
      </div>
    </div>
  );
}

export default Section;