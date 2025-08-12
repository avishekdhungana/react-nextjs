import React from "react";
import { PieChart } from "@mui/x-charts";

const Taskpiechart = ({newCount, inprogressCount, completeCount}) =>{
const data=[
        { id: 0, value: newCount, label: 'New' },
    { id: 1, value: inprogressCount, label: 'In Progress' },
    { id: 2, value: completeCount, label: 'Completed' },
  ];
  return(
    <PieChart
    series={[{ data}]}
    width={250}
    height={250}
  />
  )
}
export default Taskpiechart;