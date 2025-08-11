
import React, { useState } from "react";
import { Button, TextField, Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { Delete, CheckCircle, ArrowForward } from "@mui/icons-material";
import { Alert,AlertTitle } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";





const TaskManager =({username}) =>{



const [taskinput, Settaskinput] =useState("");
const[newtask, Setnewtask] =useState([]);
const[inprogres,Setinprogress]=useState([]);
const[complete,Setcomplete]=useState([]);

const addtask = () =>{
    if(taskinput.trim()){
        Setnewtask([...newtask, taskinput]);
        Settaskinput("")
    }
}
const moveprogress = (task) =>{
    Setnewtask(newtask.filter((t)=> t !==task));
    Setinprogress([...inprogres,task])

}
const completetask =(task) => {
    Setinprogress(inprogres.filter((t)=>t!==task));
    Setcomplete([...complete,task]);
}

return(
    <TaskManagerWrapper>
        <Typography variant="h4" align="center">Task Manager</Typography>
        <Typography variant="h6" align="center">Welcome,{username}</Typography>
<TextField 
fullWidth
label="enter a task"
value={taskinput}
onChange={(e)=>  Settaskinput(e.target.value)}
/>
<Button variant="contained" color="secondary" onclick={addtask}>

</Button>
<TaskTable
newtask={newtask}
inprogres={inprogres}
complete={complete}
moveprogress={moveprogress}
completetask={completetask}
/>




    </TaskManagerWrapper>

)}
export default TaskManager;


