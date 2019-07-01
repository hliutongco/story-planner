import React from 'react';
import storyImg from './story-structure.png';
import HoverCard from './HoverCard'

const renderHoverCards = () => {
  const sectionTitles = ["exposition", "conflict", "rising action", "climax", "falling action"]
  return sectionTitles.map(title => <HoverCard key={title} sectionTitle={title} />)
}

function App() {
  return (
    <div id="story-structure-container">
      <img alt="story structure" src={storyImg}/>
      <div className="invisible-hover">
        {renderHoverCards()}
      </div>
    </div>
  );
}

export default App;
