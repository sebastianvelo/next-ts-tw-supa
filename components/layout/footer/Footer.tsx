"use client"
import Brand from "@/components/ui/app/Brand";
import Text from "@/atoms/text/Text";
import contacts from "./contacts";

const Footer: React.FC = () => (
    <footer className="bg-gradient-to-l from-secondary-100 via-white to-secondary-100 dark:from-black dark:via-secondary-950 dark:to-black border-t border-black/20 dark:border-white/10 sticky bottom-0 py-2">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-row justify-between items-center">
                <div className="flex sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 justify-between w-full">
                    <Brand size={"sm"} />
                    <div className="flex space-x-6 items-center">
                        {contacts.map(({ id, url, Icon }) => (
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

export default Footer;