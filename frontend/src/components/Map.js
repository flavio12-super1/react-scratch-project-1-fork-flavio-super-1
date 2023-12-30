import React from "react";

const Map = () => {
  return (
    <div>
      {/* Your React components go here */}

      {/* Embed the static HTML page */}
      <div>
        Map built using rainfall and forest fire data using arcgis pro. Map was
        then cliped to just california using a polygon. Map projection had to be
        configured. Then the map was published to arcgis online as a web map.
        Once published I made it public and copied the feature layer url.
        Finially I created a react + vite + replit website where I coded the
        website layout wich includes a map.html which is then rendered as an
        iframe in my Map.jsx react component
      </div>
      <iframe
        title="Static HTML Page"
        src="map.html" // Update this path based on your project structure
        width="100%"
        height="1700px"
        frameBorder="0"
      />
    </div>
  );
};

export default Map;
