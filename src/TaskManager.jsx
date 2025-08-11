import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from "@mui/material";

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
    <Box sx={{ p: 3, minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      <Typography variant="h4" gutterBottom align="center">
        Task Manager
      </Typography>
      <Typography variant="h6" align="center" gutterBottom>
        Welcome, {username}
      </Typography>

      {/* Input */}
      <Box sx={{ display: "flex", gap: 2, mt: 2, mb: 3, maxWidth: "600px", mx: "auto" }}>
        <TextField
          fullWidth
          label="Enter a task"
          value={taskinput}
          onChange={(e) => Settaskinput(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={addtask}>
          Add
        </Button>
      </Box>

      {/* Column Titles */}
      <Box sx={{ display: "flex", justifyContent: "space-around", mb: 1 }}>
        <Typography variant="h6" color="primary">
          New Tasks
        </Typography>
        <Typography variant="h6" color="warning.main">
          In Progress
        </Typography>
        <Typography variant="h6" color="success.main">
          Completed
        </Typography>
      </Box>

      {/* Full Width Table */}
      <TableContainer component={Paper} sx={{ width: "100%", maxWidth: "100%", mx: "auto" }}>
        <Table>
          <TableBody>
            {Array.from(
              { length: Math.max(newtask.length, inprogress.length, complete.length) },
              (_, index) => (
                <TableRow key={index}>
                  {/* New Tasks Column */}
                  <TableCell sx={{ width: "33%" }}>
                    {newtask[index] && (
                      <>
                        {newtask[index]}
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => moveprogress(newtask[index])}
                          sx={{ ml: 1 }}
                        >
                          →
                        </Button>
                      </>
                    )}
                  </TableCell>

                  {/* In Progress Column */}
                  <TableCell sx={{ width: "33%" }}>
                    {inprogress[index] && (
                      <>
                        {inprogress[index]}
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => completetask(inprogress[index])}
                          sx={{ ml: 1 }}
                        >
                          ✓
                        </Button>
                      </>
                    )}
                  </TableCell>

                  {/* Completed Column */}
                  <TableCell sx={{ width: "33%" }}>{complete[index] || ""}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TaskManager;
