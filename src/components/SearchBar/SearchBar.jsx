import { Stack, TextField, Button } from "@mui/material";
import { useState, useMemo } from "react";
import SearchIcon from "@mui/icons-material/Search";

// Define styles object for the SearchBar component
const styles = {
  formStack: {
    direction: "row",
    spacing: 2,
  },
  textField: {
    type: "text",
    label: "Search By Hospital",
    variant: "outlined",
    fullWidth: true,
    inputProps: { maxLength: 100 }, // Limiting input to 100 characters
  },
  searchButton: {
    type: "submit",
    variant: "contained",
    size: "large",
    startIcon: <SearchIcon />,
    sx: { py: "15px", px: 8, flexShrink: 0 },
    disableElevation: true,
  },
};

export default function SearchBar({ list, filterList }) {
  // State to store the input text
  const [inputText, setInputText] = useState("");

  // Memoizing the filtered list to prevent unnecessary recalculations
  const filteredList = useMemo(() => {
    if (!inputText.trim()) return list;
    return list.filter((item) =>
      item["Hospital Name"]
        .toLowerCase()
        .includes(inputText.trim().toLowerCase())
    );
  }, [inputText, list]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    filterList(filteredList);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack sx={styles.formStack}>
        <TextField
          sx={styles.textField}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button sx={styles.searchButton}>
          Search
        </Button>
      </Stack>
    </form>
  );
}
