import ExperienceItemComponent from "./TimelineComponent";
import { Timeline } from "@mui/lab";
import { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import { School } from "@mui/icons-material";

export default function EducationComponent() {
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
        year={"2020-2022"}
        title={"Nova Scotia Community College"}
        technologies={[
          "Data Structures",
          "Database Administration",
          "Networking",
          "Java",
          "C & C++",
          ".NET",
          "JavaScript",
          "Python",
        ]}
        description={`IT Programming Diploma`}
        icon={<School />}
      />
    </Timeline>
  );
}
