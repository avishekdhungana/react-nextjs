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


      <Paper sx={{ flex: 2, p: 2, overflowX: "auto" }}>

    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{ backgroundColor: "#1976d2" }}>
          <TableRow>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}><b>Task</b></TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}><b>Move To Progress</b></TableCell>
            <TableCell sx={{ color: "#fff", fontWeight: "bold" }}><b> Complete</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
            
          {newtask.map((task, index) => (
            <TableRow key={index}
                      sx={{
                         backgroundColor: "#e3f2fd" ,
                         "&:hover": { backgroundColor: "#bbdefb" },
                  transition: "0.3s",
                }}
                        

            >
              <TableCell>{task}</TableCell>
              <TableCell>
                <Button 
                  onClick={() => moveprogress(task)} 
                  startIcon={<ArrowForward />}
                >
                  progress
                </Button>
              </TableCell>
            </TableRow>
            
          ))}

          {inprogress.map((task, index) => (
            <TableRow key={index}
                                  sx={{ backgroundColor: "#e8f5e9" }}


            >
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
    </Paper>
  );
};
export default TaskTable;
