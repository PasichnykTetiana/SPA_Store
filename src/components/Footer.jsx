import * as React from "react";
import {
  Grid,
  Link,
  List,
  ListItem,
  TableFooter,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledFooter = styled(TableFooter)(({ theme }) => ({
  marginTop: "auto",
  color: theme.palette.common.white,
  "& h2": {
    "@media (max-width:600px)": {
      fontSize: "2rem",
    },
  },
  "& h6": {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  "& p": {
    color: theme.palette.common.white,
  },
  "& a": {
    color: theme.palette.common.white,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  "& li": {
    paddingLeft: 0,
  },
}));

function Footer({
  categories,
  categoryLocation,
  name = " SPA Store",
  address = "Some street and some house",
}) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <StyledFooter
      sx={{
        margin: !isSmallScreen ? "auto  -24px 0 -24px" : "auto  -16px 0 -16px",
      }}
    >
      <Grid
        sx={{
          backgroundColor: theme.vars.palette.primary.dark,
          marginTop: theme.spacing(6),
          padding: !isSmallScreen ? "20px  24px 20px 24px" : "0 16px 24px 16px",
        }}
        container
        spacing={4}
        justifyContent="space-between"
      >
        <Grid item xs={12} md={4}>
          <Typography variant="h2">{name}</Typography>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Navigation
          </Typography>
          <List>
            {categories.map((singleCategory) => (
              <ListItem key={singleCategory}>
                <Link
                  href={`/category/${singleCategory}`}
                  color="textSecondary"
                >
                  <Typography
                    variant="subtitle1"
                    color={
                      singleCategory === categoryLocation
                        ? theme.vars.palette.primary.contrastText
                        : "inherit"
                    }
                  >
                    {singleCategory}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>
            Social Media
          </Typography>
          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/pasichnyk-tetiana/"
                color="textSecondary"
              >
                <Typography variant="subtitle1">Linkedin</Typography>
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="subtitle1">{address}</Typography>
        </Grid>
      </Grid>
    </StyledFooter>
  );
}

export default Footer;
