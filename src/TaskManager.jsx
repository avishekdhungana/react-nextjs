import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import TaskTable from "./TaskTable";
import Taskpiechart from "./TaskPieChart";


const TaskManager = ({ username }) => {
  const [taskinput, Settaskinput] = useState("");
  const [newtask, Setnewtask] = useState([]);
  const [inprogress, Setinprogress] = useState([]);
  const [complete, Setcomplete] = useState([]);

  const addtask = () => {
    if (taskinput.trim()) {
      Setnewtask([...newtask, taskinput]);
      Settaskinput("");
    }
  };

  const moveprogress = (task) => {
    Setnewtask(newtask.filter((t) => t !== task));
    Setinprogress([...inprogress, task]);
  };

  const completetask = (task) => {
    Setinprogress(inprogress.filter((t) => t !== task));
    Setcomplete([...complete, task]);
  };

  return (
        

    <Box
      sx={{
                backgroundColor: "#f0f0f0",  // 🌈 Your background color

        maxWidth: "1200px",
        margin: "0 auto",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 4, 
        alignItems: "center",
        
      }}
    >
      <Typography variant="h4" align="center">
        Task Manager
      </Typography>
      <Typography variant="h6" align="center">
        Welcome, {username}
      </Typography>
      <TextField
        fullWidth
        label="Enter a task"
        value={taskinput}
        onChange={(e) => Settaskinput(e.target.value)}
  
      />
      
 
      <Button variant="contained" color="secondary" onClick={addtask}>
        Add Task
      </Button>
      
      
           <Taskpiechart
      newCount={newtask.length}
      inprogressCount={inprogress.length}
      completeCount={complete.length}
      />
      <TaskTable
        newtask={newtask}
        inprogress={inprogress}
        complete={complete}
        moveprogress={moveprogress}
        completetask={completetask}
      />

    
    </Box>
   
  );
};

export default TaskManager;

