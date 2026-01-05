"use client"
import Brand from "@/components/ui/app/Brand";
import Text from "@/components/ui/atoms/text/Text";
import useI18N from "@/hooks/lang/useI18N";
import contacts from "./contacts";

const Footer: React.FC = () => {
    const { t } = useI18N();

    return (
        <footer className="bg-gradient-to-l from-secondary-200 via-white to-secondary-200 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950 border-t border-black/20 dark:border-white/10 sticky bottom-0 py-2">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-row justify-between items-center">
                    <div className="flex sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 justify-between w-full">
                        <Brand size={"sm"} />
                        <div className="flex space-x-6 items-center">
                            {contacts.map(({ id, name, url, Icon }) => (
                                <Text key={id} className="hover:text-primary-500 dark:hover:text-primary-300 transition-all duration-200">
                                    <a href={url}>
                                        <Icon />
                                    </a>
                                </Text>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;