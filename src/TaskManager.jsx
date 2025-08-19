import React, { useState } from "react";
import { useEffect } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import TaskTable from "./TaskTable";
import Taskpiechart from "./TaskPieChart";
import {  Grid,  Paper,} from "@mui/material";
import { fetchTasks, addTask, updateTask } from "./MockAPI";




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
    }, 1000); 
  });
};
  useEffect(() => {
    fetchTasks()
      .then((data) => Setnewtask(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

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
    backgroundColor: "#ffffff",
    width: "100%",       
    height: "100%",      
    margin: 0,
    padding: 3,
    display: "flex",
    flexDirection: "column",
    gap: 4,
    alignItems: "center",
  }}
    >
      <Typography variant="h3" align="center"
      
        
        sx={{
          fontWeight: 600,
          color: "primary.main",
          textAlign: "center",
          mb: 1,
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        Task Manager
      </Typography>
      <Typography variant="h6" align="center"
      sx={{ color: "text.secondary", mb: 3 }}>
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

