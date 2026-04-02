interface PageContentProps extends React.PropsWithChildren {
  className?: string;
}

const PageContent: React.FC<PageContentProps> = ({ children, className }) => (
  <div className={`${className} sm:w-full min-h-screen animate-slide-in-left pt-2`}>
    {children}
  </div>
);

export default PageContent;