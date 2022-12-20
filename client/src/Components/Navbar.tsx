import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  const theme = createTheme({
    components: {
      // Name of the component
      MuiBottomNavigation: {
        styleOverrides: {
          root: {
            background: "#59516E",
          },
        },
      },
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            // Some CSS
            color: "white",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          right: 0,
        }}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Current" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Weekly" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Locations" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </ThemeProvider>
  );
}
