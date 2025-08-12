import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import TaskTable from "./TaskTable";
import Taskpiechart from "./Taskpiechart";

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
        maxWidth: 800,
        margin: "0 auto",
        padding: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2, 
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
      <Taskpiechart
      newCount={newtask.length}
      inprogressCount={inprogress.length}
      completeCount={complete.length}
      />
      <Button variant="contained" color="secondary" onClick={addtask}>
        Add Task
      </Button>
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

