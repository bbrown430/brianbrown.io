import PageSubtitle from "@/components/typography/page-subtitle";
import PageTitle from "@/components/typography/page-title";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageTitle title="404" />
      <PageSubtitle title="Page not found!" />
    </div>
  );
};

export default NotFound;
