import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Paper,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Todo = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          📝 To-Do App
        </Typography>

        <Box display="flex" gap={2} mb={3}>
          <TextField
            label="Enter a task"
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") addTask();
            }}
          />
          <Button variant="contained" color="primary" onClick={addTask}>
            Add
          </Button>
        </Box>

        <List>
          {tasks.map((task, index) => (
            <ListItem
              key={index}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTask(index)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
              }
              divider
            >
              <ListItemText primary={task} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
};

export default Todo;
