import logo from "../../images/logo4v3.png";
import "../../designs/_shared/css/layoutshared.css";
import "../../designs/breeze/css/editable.css";
import "../../designs/breeze/css/main.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ["Home", "Who we are", "Contact Us"];
const logoimg ={
    width:"35%",
    position: "relative",
    right: "-63%",
};
const navbar={
    color: "black",
    backgroundColor: "white",
};
const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={navbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Quicksand",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="" style={logoimg}></img>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="" style={logoimg}></img>
          </Typography>
          <Box sx={{ flexGrow: 3 }} />
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            alignItems="right"
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

    /* <grid id="top" className="resize-logo sticky scrolled-deep" style={menuheight}>
        <grid id="header">
            <grid id="header-main" style={menuheight}>
                <grid id="title">
                    <a href="index.html">
                        <grid className="mz_component mz_wysiwyg mz_editable">
                            <grid className="moze-wysiwyg-editor">
                                <img src={logo} alt=""></img>
                            </grid>
                        </grid>
                    </a>
                </grid>
                <grid className="mz_component mz_menu" id="menu" style={menuheight}>
                    <ul style={menutext}>
                        <li className="selected"><a href="index.html">Home</a>
                        </li>
                        <li><a href="who-we-are/index.html">Who we are</a>
                        </li>
                        <li><a href="contact-us/index.html">Contact Us</a>
                        </li>
                    </ul>
                </grid>
            </grid>
        </grid>
    </grid> }*/
  );
};
export default NavBar;