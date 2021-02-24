import React from "react";
import * as d3 from "d3";

export const useD3 = (renderChartFn, dependencies) => {
  const ref = React.useRef();

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current));
    return () => {
      d3.select(ref.current).selectAll("path").remove();
      d3.select(ref.current).selectAll("g").remove();
    };
  }, dependencies);
  return ref;
};
