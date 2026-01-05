export interface PageContentProps {
  className?: string;
}

const PageContent: React.FC<PageContentProps & React.PropsWithChildren> = ({ children, className }) => {
  return (
    <div className={`${className} sm:w-full min-h-screen bg-gradient-to-b from-secondary-100/60 via-secondary-100/30 to-secondary-100/60 dark:from-secondary-950/70 dark:via-secondary-950/80 dark:to-secondary-950/90 animate-slide-in-left xl:animate-slide-in-right`}>
      {children}
    </div>
  );
};

export default PageContent;