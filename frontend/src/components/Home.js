import React, { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import tinycolor from "tinycolor2";

const styles = stylex.create({
  outerBar: (height) => ({
    height: height,
    transition: "height 0.3s ease, background-color 0.3s ease",
  }),
  bar: (settings) => ({
    position: "relative",
    overflow: "hidden",
    height: settings.height,
    backgroundColor: settings.color,
    transition: "height 0.3s ease, background-color 0.3s ease",

    ":hover": {
      backgroundColor: tinycolor(settings.color).darken(20).toString(),
      height: "100%",
    },
  }),
});

function Home() {
  const [settings, setSettings] = useState({
    height: 50,
    color: "rgb(50, 0, 200)",
  });

  const handleHeightChange = (event) => {
    setSettings({ ...settings, height: parseInt(event.target.value, 10) });
  };

  const handleColorChange = (event) => {
    setSettings({ ...settings, color: event.target.value });
  };

  return (
    <div>
      <div>
        <label htmlFor="height">Select Height:</label>
        <select
          id="height"
          onChange={handleHeightChange}
          value={settings.height}
        >
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={150}>150</option>
          <option value={200}>200</option>
        </select>
      </div>
      <div>
        <label htmlFor="color">Select Color:</label>
        <input
          type="color"
          id="color"
          onChange={handleColorChange}
          value={settings.color}
        />
      </div>
      <div
        {...stylex.props(styles.outerBar(settings.height))}
        onClick={() =>
          setSettings({
            ...settings,
            height:
              settings.height >= 150
                ? settings.height - 100
                : settings.height + 100,
          })
        }
      >
        <div {...stylex.props(styles.bar(settings))} />
      </div>
    </div>
  );
}

export default Home;
