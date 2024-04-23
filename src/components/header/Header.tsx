import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import Link from 'next/link';
import  styles  from "./header.module.css"
const useStyles = makeStyles((theme: Theme) => ({
  navItem: {
    padding: "14px 16px",
    color: "#f2f2f2",
    textDecoration: "none",
    fontSize: "17px",
  },
  activeNavItem: {
    backgroundColor: "#04AA6D",
    color: "white",
  },
  icon: {
    display: "none", // Hide icon by default
    [theme.breakpoints.down("sm")]: {
      display: "block", // Show icon on small screens
    },
  },
}));

const Header: React.FC = () => {
  const classes = useStyles();
  const [isResponsive, setIsResponsive] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:600px)'); // Use media query directly

  const toggleResponsive = () => {
    setIsResponsive(!isResponsive);
  };

  const handleListItemClick = () => {
    setIsResponsive(false); // Close the drawer when a list item is clicked
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            My Website
          </Typography>
          {isMobile &&  (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              className={classes.icon}
              onClick={toggleResponsive}
            >
              {/* <MenuIcon /> */}
            </IconButton>
          )}
          <Drawer anchor="right" open={isResponsive && isMobile} onClose={toggleResponsive}>
            <List>
              <div className={styles.navitemList}>
                <Link href="/" legacyBehavior>
                  <a href="#home" className={`${classes.navItem} active`} onClick={handleListItemClick}>
                    Home
                  </a>
                </Link>
                <Link href="/about" legacyBehavior>
                  <a href="#about" className={classes.navItem} onClick={handleListItemClick}>
                    About
                  </a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a href="#contact" className={classes.navItem} onClick={handleListItemClick}>
                    Contact
                  </a>
                </Link>
              </div>
            </List>
          </Drawer>
          {/* Render navigation items only if not on small screen or if menu is not open */}
          {!isMobile || !isResponsive ? (
            <div>
              <Link href="/" legacyBehavior>
                <a href="#home" className={`${classes.navItem} active`}>
                  Home
                </a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a href="#about" className={classes.navItem}>
                  About
                </a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a href="#contact" className={classes.navItem}>
                  Contact
                </a>
              </Link>
            </div>
          ) : null}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
