import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { Code } from "@mui/icons-material";
import { Card, CardContent } from "@mui/material";

export default function ExperienceComponent() {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="left">
          Experience
        </Typography>
        <Timeline
          position="right"
          sx={{
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 1,
            },
          }}
        >

        <Experience
          year={'2025'}
          title={'IBM, Full Stack Software Developer'}
          description={`
            Led a team of 10 developers, overseeing code reviews and DevOps initiatives to enhance development workflows. 
            Received an award for client excellence, delivery, and professional growth. 
          `}/>

        <Experience 
            year={'2023-2024'} 
            title={'IBM, Software Developer'}
            description={`
                Back-End Developer for a financial industry payment system migration project, responsible for designing and implementing robust solutions to ensure seamless system transitions.
                Designed and developed microservices in Java using Spring and Kafka, with a focus on implementing new features and resolving critical performance issues. `
            }/>

        <Experience 
            year={'2022'} 
            title={'IBM, Software Developer / Test Specialist'}
            description={`
                Responsible for the development and execution of an automated framework that
                validated the resiliency and recoverability of micro-services in a containerized environment.`
            }/>
          


    
        </Timeline>
      </CardContent>
    </Card>
  );
}

function Experience({ year, title, description } : { year: string, title: string, description: string }) {
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
                <Code />
            </TimelineDot>
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <Typography variant="h6" component="span">
                {title}
            </Typography>
            <Typography >
                {description}
            </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}
