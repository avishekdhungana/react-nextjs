import React from "react";
import {  
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button
} from "@mui/material";
import { CheckCircle, ArrowForward } from "@mui/icons-material";

 const TaskTable = ({ newtask, inprogress, complete, moveprogress, completetask }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Task</b></TableCell>
            <TableCell><b>Move To Progress</b></TableCell>
            <TableCell><b> Complete</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {newtask.map((task, index) => (
            <TableRow key={index}>
              <TableCell>{task}</TableCell>
              <TableCell>
                <Button 
                  onClick={() => moveprogress(task)} 
                  startIcon={<ArrowForward />}
                >
                  Move to Progress
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {inprogress.map((task, index) => (
            <TableRow key={index}>
              <TableCell>{task}</TableCell>
              <TableCell>In Progress</TableCell>
              <TableCell>
                <Button 
                  onClick={() => completetask(task)} 
                  startIcon={<CheckCircle />}
                >
                  Complete
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {complete.map((task, index) => (
            <TableRow key={index}>
              <TableCell>{task}</TableCell>
                  <TableCell>-</TableCell> 

                <TableCell>Completed</TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TaskTable;
