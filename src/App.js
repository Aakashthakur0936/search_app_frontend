import axios from "axios";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import { Box, Typography } from "@mui/material";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/mern/search/app/search",
        { query }
      );
      setResults(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="App">
      <h1 className="heading-col">Search App</h1>
      <input
        type="text"
        value={query}
        className="search-box"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="button-cls">
        Search
      </button>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          margin: "0rem 8rem",
          "@media(max-width:900px)": {
            margin: "0rem 2rem",
          },
        }}
      >
        {results.length > 0
          ? results.map((item, index) => (
              <Box
                sx={{
                  margin: "0.5rem 1rem",
                }}
              >
                <Card item={item} />
              </Box>
            ))
          :  results?.length ===0 && (
              <Box
                sx={{
                  border: "2px solid #000",
                  padding: "2rem",
                  borderRadius: "0.5rem",
                  margin: "auto",
                  marginTop: "2rem",
                }}
              >
                <Typography component={"h1"} sx={{ fontSize: "2rem" }}>
                  No Data Found
                </Typography>
              </Box>
            )}
      </Box>
    </div>
  );
}

export default App;
