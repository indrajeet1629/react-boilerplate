import React, { useState } from "react";
import Plot from "react-plotly.js";

const Graph = () => {
  const [count, setCount] = useState([1, 2, 3]);
  return (
    <div>
      <Plot
        data={[
          {
            x: count,
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: count, y: [2, 5, 3] },
        ]}
        layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
      />
      <button onClick={() => setCount([4, 5, 6])}>MyButton</button>
    </div>
  );
};

export default Graph;
