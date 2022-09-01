import { HighlightsItem } from "../components";

const Highlights = (props) => {
  return (
    <div className="highlights-grid">
      {
        props.highlights.map((highlight, index) => <HighlightsItem
          key={'highlight-' + (index+1)}
          image={highlight.image}
          title={highlight.title}
          description={highlight.description}
          link={highlight.link}
        ></HighlightsItem>
        )
      }
    </div>
  );
}

export default Highlights;