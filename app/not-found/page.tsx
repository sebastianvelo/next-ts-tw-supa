"use client"
import PageContent from "@/components/layout/main/PageContent";
import EmptySection from "@/components/ui/layout/empty-section/EmptySection";
import useNavigationError from "@/hooks/error/useNavigationError";

const NotFoundPage: React.FC = () => {
  const { redirectError, clearRedirectError } = useNavigationError();

  return (
    <PageContent>
      <div className="flex justify-center items-center h-full py-12">
        <EmptySection title={"Error"} subtitle={redirectError} />
      </div>
    </PageContent>
  );
};

export default NotFoundPage;