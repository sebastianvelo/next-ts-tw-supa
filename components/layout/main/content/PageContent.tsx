export interface PageContentProps {
  className?: string;
}

const PageContent: React.FC<PageContentProps & React.PropsWithChildren> = ({ children, className }) => (
  <div className={`${className} sm:w-full min-h-screen bg-gradient-to-b from-white via-white/30 to-white dark:from-black dark:via-black/60 dark:to-black animate-slide-in-top pb-2`}>
    {children}
  </div>
);

export default PageContent;