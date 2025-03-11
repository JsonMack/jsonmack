import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import NavigationBar from "./components/NavigationBar";
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from "@mui/material";
import ExperienceComponent from "./components/ExperienceComponent";
import EducationComponent from "./components/EducationComponent";
import { ExpandMoreOutlined } from "@mui/icons-material";
import React, { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  colorSchemes: {
    dark: true,
    light: true
  },
  typography: {
    fontSize: 16,
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />

      <Stack spacing={2}>
        <Section title="Experience" component={<ExperienceComponent/>} />
        <Section title="Education" component={<EducationComponent/>} />
      </Stack>

      <CssBaseline />
    </ThemeProvider>
  );
}

function Section({component, title} : { component: ReactNode, title: string}) : React.ReactElement {
  return (
    <>
      <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreOutlined />}
      >
        <Typography component="span" variant="h6">{title}</Typography>
      </AccordionSummary>
      
      <AccordionDetails>
        { component }
      </AccordionDetails>
    </Accordion>
    </>
  );
}
