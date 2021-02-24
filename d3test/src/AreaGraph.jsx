import React, { useState, useEffect } from "react";
import { useD3 } from "./hooks/useD3";
import Button from "react-bootstrap/Button";
import * as d3 from "d3";
import "./AreaGraph.css";

// import styled from "styledcomponents";

function AreaGraph({ data, option }) {
  console.log(data[option]);

  // parse the date / time
  const parseTime = d3.timeParse("%b");

  const ref = useD3(
    (svg) => {
      const margin = { top: 20, right: 20, bottom: 30, left: 70 },
        width = 575 - margin.left - margin.right,
        height = 350 - margin.top - margin.bottom;

      // format the data
      data[option].forEach(function (d) {
        if (d.vsly == 0) {
          d.date = parseTime(d.date);
          d.vsly = 1;
        }
      });
      //specification of measurement for x axis//
      const x = d3
        .scaleTime()
        .domain(
          d3.extent(data[option], function (d) {
            return d.date;
          })
        )
        .range([0, width]);
      //specofication of measurement for y axis//
      const y = d3
        .scaleLinear()
        .domain([
          0,
          d3.max(data[option], function (d) {
            return d.score;
          }),
        ])
        .range([height, 0]);
      //area specification for the whole chart//
      const area = d3
        .area()
        .x(function (d) {
          return x(d.date);
        })
        .y0(height)
        .y1(function (d) {
          return y(d.score);
        });
      //layout specification for the areagraph//
      svg
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .style("fill", "lightblue")
        .attr("stroke", "steelblue")
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("stroke-width", "strokeWidth")
        .attr("class", "graphset")
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

      //appending data and filling the area with specified color//
      svg
        .append("path")
        .datum(data[option])
        .attr("class", "area")
        .attr("d", area)
        .attr("fill", "lightblue")
        .attr("stroke", "grey")
        .attr("stroke-width", 1.8);

      //x axis svg specification//
      svg
        .append("g")
        .attr("class", "x axis")
        .attr("class", "line-group")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
      //y axis svg specification//
      svg.append("g").attr("class", "y axis").call(d3.axisLeft(y));
    },
    [data[option]]
  );

  return (
    <>
      <div classname="areacontent">
        <h2>Quality Score Trend</h2>&nbsp;
        <Button type="button" class="btn btn-primary" size="sm" disabled>
          Day
        </Button>{" "}
        <Button type="button" class="btn">
          Week
        </Button>{" "}
        <Button type="button" class="btn">
          Month
        </Button>{" "}
        <Button type="button" class="btn ">
          Quarter{" "}
        </Button>
        <Button type="button" class="btn ">
          Half{" "}
        </Button>
        <Button type="button" class="btn">
          Yearly{" "}
        </Button>
      </div>
      <br />
      <div className="area-chart">
        <svg
          ref={ref}
          style={{
            height: 300,
            width: "100%",
            marginRight: "0px",
            marginLeft: "30rem",
          }}
        ></svg>
        {data[0]?.name}
      </div>
      {option}
    </>
  );
}
export default AreaGraph;
