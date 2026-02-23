export interface PageContentProps {
  className?: string;
}

const PageContent: React.FC<PageContentProps & React.PropsWithChildren> = ({ children, className }) => (
  <div className={`${className} sm:w-full min-h-screen bg-gradient-to-r from-white via-secondary-100/30 to-white dark:from-black dark:via-secondary-950/80 dark:to-black animate-slide-in-left xl:animate-slide-in-right`}>
    {children}
  </div>
);

export default PageContent;