import TimelineBlock from "./timeline-block";
import { motion } from "framer-motion";
import { getTimelineProjects } from "../../data/projects";

const Timeline: React.FC = () => {
  // Get projects data from centralized source
  const timelineProjects = getTimelineProjects();

  return (
    <div className="relative flex flex-col items-center py-10">
      <div className="relative flex flex-col gap-10 lg:gap-2 z-10">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-background via-muted to-background z-0" />
        {timelineProjects.map((project, index) => {
          const isFirst = index === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isFirst ? { opacity: 1, y: 0 } : undefined}
              whileInView={!isFirst ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={!isFirst ? { once: true, amount: 0.3 } : undefined}
              className="relative z-10"
            >
              <TimelineBlock
                side={index % 2 === 0 ? "right" : "left"}
                color={project.color}
                title={project.title}
                skills={project.skills}
                description={project.description}
                navigate={project.path}
                lottiePath={project.lottiePath}
                date={project.date}
                lottieWidth={project.lottieWidth}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;