import React from 'react';
import svgX from './SVGS/X.svg'
import svgArrowSeen from './SVGS/arrow-seen.svg'
import svgArrowNotSeen from './SVGS/arrow-notseen.svg'

const App = () => {
  return (
    <div className="App">
      <img src={svgX} alt="Not found" />
      <img src={svgArrowSeen} alt="Not found"/>
      <img src={svgArrowNotSeen} alt="Not found"/>
    </div>
  );
}
export default App;