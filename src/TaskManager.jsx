import React, { useState } from "react";
import { useEffect } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import TaskTable from "./TaskTable";
import Taskpiechart from "./TaskPieChart";
import {  Grid,  Paper,} from "@mui/material";



const TaskManager = ({ username }) => {
  const [taskinput, Settaskinput] = useState("");
  const [newtask, Setnewtask] = useState([]);
  const [inprogress, Setinprogress] = useState([]);
  const [complete, Setcomplete] = useState([]);
  const [loading, setLoading] = useState(true);

const fetchMockTasks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        newtask: ["Design homepage", "Setup database"],
        inprogress: ["Build API"],
        complete: ["Project setup"],
      });
    }, 1000); // simulate 1-second delay
  });
};
 useEffect(() => {
    fetchMockTasks().then((data) => {
      Setnewtask(data.newtask);
      Setinprogress(data.inprogress);
      Setcomplete(data.complete);
      setLoading(false);
    });
  }, []);

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
    if (loading) {
    return <Typography align="center">Loading tasks...</Typography>;
  }

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
      <Grid container spacing ={3}>
        <Grid item xs={12} md={8}> </Grid>
                  <Paper sx={{ p: 2, borderRadius: 3, boxShadow: 4 }}>

      <TaskTable
        newtask={newtask}
        inprogress={inprogress}
        complete={complete}
        moveprogress={moveprogress}
        completetask={completetask}
      />
      
      </Paper>
</Grid>
    
    </Box>
   
  );
};

export default TaskManager;

