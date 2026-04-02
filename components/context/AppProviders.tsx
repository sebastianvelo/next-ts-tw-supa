import NavigationErrorProvider from "@/context/error/NavigationErrorProvider";
import LanguageProvider from "@/context/language/LanguageProvider";
import ThemeProvider from "@/context/theme/ThemeProvider";
import ToastProvider from "@/context/toast/ToastProvider";

const AppProviders: React.FC<React.PropsWithChildren> = ({ children }) => (
    <ThemeProvider>
        <LanguageProvider>
            <NavigationErrorProvider>
                <ToastProvider>
                    {children}
                </ToastProvider>
            </NavigationErrorProvider>
        </LanguageProvider>
    </ThemeProvider>
)

export default AppProviders;