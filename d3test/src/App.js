import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import GuageChart from "./GaugeChart";
import AreaGraph from "./AreaGraph";
import Data from "./data/data.json";
import FilterOptions from "./FilterOptions";
import { FiGlobe } from "react-icons/fi";

//imported data from json file//
const gaugeData = Data["gaugeData"];

export default function App() {
  const itemObj = {};
  const [areaDataName, setAreaDataName] = useState("Quality Score");
  const [areaData] = useState(Data["areaData"]);
  //calculating data for donut items//

  function handleClick(name) {
    console.log(name);
    setAreaDataName(name);
  }
  const donutItems = gaugeData.map((item, index) => {
    const diffScore = 100 - item.score;
    const itemData = [item, { name: "Other", score: diffScore }];
    itemObj[item.name] = itemData;
    //guage chart data //
    return (
      <GuageChart
        key={index}
        data={itemObj[item.name]}
        option={item.name}
        onClick={handleClick}
      />
    );
  });

  return (
    <div className="App">
      {/* returning nav bar and side bar as 2 different child components */}
      <Navbar />
      <Sidebar />
      {/* container for the full child component guage chart*/}
      <div className="donutfull">
        {/* div for the guage chart items  */}{" "}
        <h4
          style={{
            marginLeft: "2px",
            backgroundColor: "#e0ebeb",
          }}
        >
          {" "}
          Diagonostic Tool &nbsp;
          <FiGlobe />
        </h4>
        <div className="donutContainar">{donutItems}</div>
        <br />
        {/* <DonutChart /> */}
        <FilterOptions />
      </div>
      {/* returning area chart */}
      <AreaGraph data={areaData} option={areaDataName} />
    </div>
  );
}
