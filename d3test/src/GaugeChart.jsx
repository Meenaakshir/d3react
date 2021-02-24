import React from "react";
import * as d3 from "d3";
import "./AreaGraph";
import { useD3 } from "./hooks/useD3";

function GaugeChart({ data, option, onClick }) {
  //useD3 hook that gets the reference to the dom for manipulation//
  const ref = useD3(
    //svg specification for the guage chart //
    (svg) => {
      const dataFromState = data;

      //measurement for the gauge chart//
      const height = 200,
        width = 200,
        margin = 6;

      const radius = Math.min(width, height) / 2 - margin;
      //area specification for the guage chart//
      const g = svg
        .select(".plot-area")
        .attr("transform", `translate(${width / 2}, ${height / 2})`);
      //color shades for the guage chart //
      const colors = ["#8CC0FF", "#C2DDFF", "#D6E9FF", "#EBF4FF"];
      // calculating the extend to which the darker shade is to be reflected based on score)
      const pie = d3.pie().value((d) => d.score);
      //outer and inner radius specifications for guage chart//
      const path = d3.arc().outerRadius(radius).innerRadius(70);

      // const label = d3
      //   .arc()
      //   .outerRadius(radius)
      //   .innerRadius(radius - 32);

      const pies = g
        .selectAll(".arc")
        .data(pie(dataFromState))
        .enter()
        .append("g")
        .attr("class", "arc");
      //filling colors in the pie based on the data //
      pies
        .append("path")
        .attr("d", path)
        .attr("fill", (d, i) => colors[i]);
    },
    [data.length] //dependency is data( until the length of the given data the number of charts are created)//
  );

  return (
    <>
      <div onClick={() => onClick(data[0]?.name)}>
        <div>{data[0]?.name}</div>
        <div>{data[0]?.score}</div>
        {/* returning the whole svg with the specified height and width */}
        <div>
          <svg
            ref={ref}
            style={{
              height: "200",
              width: "200",
            }}
          >
            <g className="plot-area" />
          </svg>
        </div>
      </div>
    </>
  );
}
export default GaugeChart;
