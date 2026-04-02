"use client"
import PageContent from "@/components/layout/content/PageContent";
import EmptySection from "@/molecules/section/empty-section/EmptySection";
import useNavigationError from "@/hooks/error/useNavigationError";

const NotFoundPage: React.FC = () => {
  const { redirectError } = useNavigationError();

  return (
    <PageContent>
      <div className="flex justify-center items-center h-full py-12">
        <EmptySection title={"Error"} subtitle={redirectError} />
      </div>
    </PageContent>
  );
};

export default NotFoundPage;