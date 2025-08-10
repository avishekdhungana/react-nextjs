
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
    <div>
        

                <Box component="section" sx={{ pt: 2, border: '1px dashed grey' }}>
                    <h1>Task manager</h1>
                     <h2>Welcome,{username}</h2>
                     
<TextField fullWidth label="Enter a task" id="enter a task"

    
        value={taskinput}
        onChange={(e)=> Settaskinput(e.target.value)}
        />
        
        <button variant ="contained" color ="secondary" onClick={addtask}>Addtask

        </button>
        <TableContainer component={paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Newtask</TableCell>
                         <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
            </Table>

        <TableBody>
            <Alert severity="info">
  <AlertTitle>Info</AlertTitle>
  You have new task

     <TableRow key={index}
        <li key={index}>
        {task} 
        <button variant ="contained" color ="secondary" onClick={()=> moveprogress(task)}>moveinprogress</button>
        </li>
        
       )
    )
}

</Alert>

        
      

                <h3>In progress</h3>


        <ul>
<Alert severity="warning">
  <AlertTitle>Warning</AlertTitle>
  complete your task in time.


        {inprogres.map((task,index)=>(
            <li key={index}>
            {task} <button onClick={()=>  completetask(task)}>movetocomplete</button>
            </li>
        ))}
        </Alert>
    
</ul>

<Alert variant="filled" severity="success">
  congraluation

<h3>complete</h3>
{complete.map((task,index)=>(
    <li key={index}>
    {task} <button variant ="contained" color ="secondary" onClick={()  => completetask(task)}>complete</button>
    </li>
)
)}
</Alert>
</Box>


    </div>
)
}
export default TaskManager;


