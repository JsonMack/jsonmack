import Timeline from "@mui/lab/Timeline";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import ExperienceItemComponent from "./TimelineComponent";
import { Work } from "@mui/icons-material";

export default function ExperienceComponent() {
  return (
    <Timeline
      position="right"
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.15,
        },
      }}
    >
      <ExperienceItemComponent
        year={"2025"}
        title={"IBM, Full Stack Software Developer"}
        technologies={["React", "Vite", ".NET", "C#"]}
        icon={<Work />}
        description={`
            Led a team of 10 developers, overseeing code reviews and DevOps initiatives to enhance development workflows. 
            Received an award for client excellence, delivery, and professional growth. 
          `}
      />

      <ExperienceItemComponent
        year={"2023-2024"}
        title={"IBM, Software Developer"}
        technologies={["Java", "Kafka", "Spring", "NoSQL"]}
        icon={<Work />}
        description={`
                Back-End Developer for a financial industry payment system migration project, responsible for designing and implementing robust solutions to ensure seamless system transitions.
                Designed and developed microservices in Java using Spring and Kafka, with a focus on implementing new features and resolving critical performance issues. `}
      />

      <ExperienceItemComponent
        year={"2022"}
        title={"IBM, Software Developer / Test Specialist"}
        technologies={["Java", "Cucumber", "Mockito", "JUnit"]}
        icon={<Work />}
        description={`
                Responsible for the development and execution of an automated framework that
                validated the resiliency and recoverability of micro-services in a containerized environment.`}
      />
    </Timeline>
  );
}
