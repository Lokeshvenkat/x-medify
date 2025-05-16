import { MenuItem, Select, Button, InputAdornment, Box } from "@mui/material";
import { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Define styles object for the SearchHospital component
const styles = {
  formContainer: {
    display: "flex",
    gap: 4,
    justifyContent: "space-between",
    flexDirection: { xs: "column", md: "row" },
  },
  selectField: {
    minWidth: 200,
    width: "100%",
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

export default function SearchHospital() {
  // State to store the list of states and cities
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  // State to store the form data
  const [formData, setFormData] = useState({ state: "", city: "" });
  const navigate = useNavigate();

  // Fetch states data on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://meddata-backend.onrender.com/states"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  // Fetch cities data when the state is selected
  useEffect(() => {
    const fetchCities = async () => {
      setCities([]);
      setFormData((prev) => ({ ...prev, city: "" }));
      try {
        const data = await axios.get(
          `https://meddata-backend.onrender.com/cities/${formData.state}`
        );
        setCities(data.data);
      } catch (error) {
        console.log("Error in fetching city:", error);
      }
    };

    if (formData.state !== "") {
      fetchCities();
    }
  }, [formData.state]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.state && formData.city) {
      navigate(`/search?state=${formData.state}&city=${formData.city}`);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={styles.formContainer}
    >
      {/* State selection dropdown */}
      <Select
        displayEmpty
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={styles.selectField}
      >
        <MenuItem disabled value="" selected>
          State
        </MenuItem>
        {states.map((state) => (
          <MenuItem key={state} value={state}>
            {state}
          </MenuItem>
        ))}
      </Select>

      {/* City selection dropdown */}
      <Select
        displayEmpty
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        required
        sx={styles.selectField}
      >
        <MenuItem disabled value="" selected>
          City
        </MenuItem>
        {cities.map((city) => (
          <MenuItem key={city} value={city}>
            {city}
          </MenuItem>
        ))}
      </Select>

      {/* Search button */}
      <Button sx={styles.searchButton}>
        Search
      </Button>
    </Box>
  );
}
