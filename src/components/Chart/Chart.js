import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const datapointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...datapointValues);

    return (
    <div className="chart">
        {props.dataPoints.map((datapoint) => 
        <chartBar 
        key={datapoint.label}
        value={datapoint.value} 
        maxValue={totalMaximum}
        label={datapoint.label}
        />
        )};
    </div>
    );
};

export default Chart;