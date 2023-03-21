import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Drawer,
  IconButton,
  Link as MuiLink,
  List,
  ListItemText,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createUseStyles } from "react-jss";
import Loader from "./Loader";

const useStyles = createUseStyles((theme) => ({
  link: {
    textUnderlineOffset: theme.spacing(1),
    textDecorationThickness: theme.spacing(1),
  },
  drawerList: {
    textTransform: "uppercase",
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(3),
    color: theme.palette.text.primary,
  },
}));

function CategoriesMenu({ categories, categoryLocation }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles({ theme });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  if (categories.length === 0) {
    return <Loader />;
  }

  return (
    <Box
      color="primary"
      sx={{
        margin: !isSmallScreen ? "0  -24px 20px -24px" : "0",
        textTransform: "capitalize",
        color: theme.palette.common.white,
        backgroundColor: !isSmallScreen
          ? theme.vars.palette.primary.dark
          : "transcendent",
      }}
    >
      {isSmallScreen ? (
        <>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
            <Box sx={{ width: 250 }}>
              <List>
                {categories.map((singleCategory) => (
                  <MuiLink
                    key={singleCategory}
                    button
                    sx={{ textDecoration: "none" }}
                    variant="subtitle2"
                    component={Link}
                    to={`/category/${singleCategory}`}
                    selected={singleCategory === categoryLocation}
                  >
                    <ListItemText
                      classes={{ root: classes.drawerList }}
                      primary={singleCategory}
                    />
                  </MuiLink>
                ))}
              </List>
            </Box>
          </Drawer>
        </>
      ) : (
        <Box sx={{ width: "100%" }}>
          <Stack direction="row" justifyContent="center">
            {categories.map((singleCategory) => (
              <MuiLink
                classes={{ root: classes.link }}
                variant="subtitle2"
                key={singleCategory}
                component={Link}
                to={`/category/${singleCategory}`}
                underline={
                  singleCategory === categoryLocation ? "none" : "hover"
                }
                color={
                  singleCategory === categoryLocation
                    ? theme.vars.palette.primary.contrastText
                    : "inherit"
                }
                sx={{ margin: 1 }}
              >
                {singleCategory}
              </MuiLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default CategoriesMenu;
