import Text from "@/atoms/text/Text";
import I18n from "@/locales/I18nKeys";

interface LoadingProps {
    isLoading: boolean;
    error?: Error | string | null;
    children?: React.ReactNode;
    loadingText?: string;
}

const Loading: React.FC<LoadingProps> = ({ isLoading, error, children, loadingText = I18n.LOADING.LABEL }) => {
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen w-full flex-col gap-5 bg-white/20 dark:bg-secondary-950/70 animation-pulse">
                <div className="relative flex items-center justify-center h-32 w-32">
                    <div className="absolute inset-0 rounded-full border-2 border-primary-500/20 dark:border-primary-400/15" />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary-500 dark:border-t-primary-400 animate-spin" />
                    <div className="h-4 w-4 rounded-full bg-primary-500 dark:bg-primary-400 animate-bounce" />
                </div>
                <Text t={loadingText} className="text-sm text-secondary-400 dark:text-secondary-500 tracking-wide animate-pulse" />
            </div>
        );
    }

    return (!error && <>{children}</>);
};

export default Loading;