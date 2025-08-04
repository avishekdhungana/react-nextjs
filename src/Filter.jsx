import { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Stack,
  Paper,
} from "@mui/material";

// Step 1: Data for filtering
const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Banana", category: "Fruit" },
  { name: "Tiger", category: "Animal" },
  { name: "Elephant", category: "Animal" },
  { name: "Parrot", category: "Bird" },
  { name: "Eagle", category: "Bird" },
  { name: "Butterfly", category: "Insect" },
  { name: "Bee", category: "Insect" },
  { name: "Shark", category: "Aquatic" },
  { name: "Octopus", category: "Aquatic" },
];

const Filter = () => {
  const [category, setCategory] = useState("All");

  const filteredItems =
    category === "All"
      ? items
      : items.filter((item) => item.category === category);

  // Step 4: All unique categories for buttons
  const categories = ["All", "Fruit", "Animal", "Bird", "Insect", "Aquatic"];

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      {/* Heading */}
      <Typography variant="h4" align="center" gutterBottom>
        🧃 Filter Items by Category
      </Typography>

      {/* Buttons for each category */}
      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" mb={3}>
        {categories.map((cat, index) => (
          <Button
            key={index}
            variant={category === cat ? "contained" : "outlined"}
            color="primary"
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </Stack>

      {/* Display filtered items */}
      <Stack spacing={2}>
        {filteredItems.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{ padding: 2, textAlign: "center", fontWeight: "bold" }}
          >
            {item.name} — {item.category}
          </Paper>
        ))}
      </Stack>
    </Container>
  );
};

export default Filter;
