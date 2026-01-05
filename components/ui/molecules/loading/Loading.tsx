import Text from "@/components/ui/atoms/text/Text";
import I18n from "@/locales/I18nKeys";

interface LoadingProps {
    isLoading: boolean;
    error?: any;
    children?: React.ReactNode;
    loadingText?: string;
}

const Loading: React.FC<LoadingProps> = ({ isLoading, error, children, loadingText = I18n.LOADING.LABEL }) => {
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen w-full flex-col gap-4 animate-pulse bg-white/50 dark:bg-black/70">
                <div className="animate-spin rounded-full h-32 w-32 border-l-2 border-t-8 border-b-4 border-l-primary-500 border-t-primary-600 border-b-primary-700 dark:border-l-primary-400 dark:border-t-primary-500 dark:border-b-primary-600"></div>
                <Text t={loadingText} />
            </div>
        );
    }

    return (!error && <>{children}</>);
};

export default Loading;