import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
export interface InitUser {
  name: string;
  gender: string;
  lang: string;
}

const Home = () => {
  const history = useHistory();
  const [user, setUser] = useState<InitUser>({
    name: "",
    gender: "Male",
    lang: "Java",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleClick = () => {
    console.log(user);
    history.push("/exam", user);
  };
  return (
    <div style={{ marginTop: "20px" }} data-testid = "home">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <Box>
          <TextField
            id="standard-basic"
            name="name"
            value={user.name}
            onChange={handleChange}
            label="Enter Name"
            variant="standard"
            sx={{ width: "75%" }}
          />
        </Box>
        <Box>
          <TextField
            id="standard-select-currency"
            name="gender"
            select
            label="Select gender"
            value={user.gender}
            onChange={handleChange}
            variant="standard"
            sx={{ width: "75%" }}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
          </TextField>
        </Box>
        <Box>
          <TextField
            id="standard-select-currency"
            select
            name="lang"
            label="Select Language"
            value={user.lang}
            onChange={handleChange}
            variant="standard"
            sx={{ width: "75%" }}
          >
            <MenuItem value={"Java"}>Java</MenuItem>
            <MenuItem value={"Nodejs"}>Nodejs</MenuItem>
          </TextField>
        </Box>
        <Box>
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{ marginTop: "12px", width: "75%" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
