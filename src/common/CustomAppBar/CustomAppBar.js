import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function CustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <Link to="professors">Professors</Link>
          </Button>
          &nbsp; &nbsp;
          <Button color="inherit">
            <Link to="Students">Students</Link>
          </Button>
          &nbsp; &nbsp;
          <Button color="inherit">
            <Link to="Courses">Courses</Link>
          </Button>
          &nbsp; &nbsp;
          <Button color="inherit">
            <Link to="">Students of Professors</Link>
          </Button>
          &nbsp; &nbsp;
          <Button color="inherit">
            <Link to="">Students Grade</Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
