import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { NavLink } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <IconButton>
              <Typography style={{ color: "white" }}>Home</Typography>
            </IconButton>
          </NavLink>
          <NavLink to="/users" style={{ textDecoration: "none" }}>
            <IconButton>
              <Typography style={{ color: "white" }}>Users</Typography>
            </IconButton>
          </NavLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
