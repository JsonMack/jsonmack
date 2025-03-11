import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { GitHub, LinkedIn } from "@mui/icons-material";

export default function NavigationBar() {
  return (
    <Box sx={{ 
      flexGrow: 1,
      marginBottom: 1
      }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <MenuIcon />

          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jason MacKeigan
          </Typography>

          
            <IconButton href="https://github.com/jsonmack" target="source">
              <GitHub />
            </IconButton>

            <IconButton href="https://linkedin.com/in/jason-mackeigan-001/" target="source">
              <LinkedIn />
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
