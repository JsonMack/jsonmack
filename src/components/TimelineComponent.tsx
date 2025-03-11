import { Code } from "@mui/icons-material";
import { TimelineItem, TimelineOppositeContent, TimelineSeparator, TimelineConnector, TimelineDot, TimelineContent } from "@mui/lab";
import { Typography, Stack, Chip } from "@mui/material";
import { ReactNode } from "react";

export default function TimelineComponent({
    year,
    title,
    description,
    technologies,
    icon = <Code />
  }: {
    year: string;
    title: string;
    description: string;
    technologies: Array<string>,
    icon?: ReactNode
  }) {
    return (
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          variant="body2"
          color="text.secondary"
        >
          {year}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            {icon}
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent margin={0}>
          <Typography variant="h6" component="span">
            {title}
          </Typography>
          <Typography>{description}</Typography>
          <Stack direction="row" spacing={1} marginTop={.5}>
          {
            technologies.map(technology => <Chip label={technology} color="primary" variant="outlined" size="small"/>)
          }
          </Stack>
        </TimelineContent>
      </TimelineItem>
    );
  }
  