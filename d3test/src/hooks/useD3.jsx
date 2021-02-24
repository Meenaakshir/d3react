import React from "react";
import * as d3 from "d3";

export const useD3 = (renderChartFn, dependencies) => {
  const ref = React.useRef();

  React.useEffect(() => {
    renderChartFn(d3.select(ref.current));
    return () => {
      d3.select(ref.current).selectAll("path").remove();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      d3.select(ref.current).selectAll("g").remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  return ref;
};
