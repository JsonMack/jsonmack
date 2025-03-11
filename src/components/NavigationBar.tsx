import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {
  EmailOutlined,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

export default function NavigationBar() {
  return (
    // <Box
    //   sx={{
    //     flexGrow: 1,
    //     marginBottom: 2
    //   }}
    // >
      <AppBar position="static" color="primary" sx={{
        borderRadius: 1,
        marginBottom: 2
      }}>
        <Toolbar>
        <Avatar src="photo.jpeg" />
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            Jason MacKeigan
          </Typography>

          <IconButton href="https://github.com/jsonmack" target="source">
            <GitHub />
          </IconButton>

          <IconButton
            href="https://linkedin.com/in/jason-mackeigan-001/"
            target="source"
          >
            <LinkedIn />
          </IconButton>

          <IconButton
            target="_top"
            rel="noopener noreferrer"
            href={`mailto:jason.mackeigan@outlook.com`}
          >
            <EmailOutlined />
          </IconButton>
        </Toolbar>
      </AppBar>
    // </Box>
  );
}
