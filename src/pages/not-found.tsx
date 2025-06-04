import ProjectHeader from "@/components/project-page/project-header";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <ProjectHeader title="404" subtitle="Not found!" />
    </div>
  );
};

export default NotFound;
