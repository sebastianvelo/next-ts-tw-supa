"use client";
import Brand from "@/components/ui/app/Brand";
import ThemeToggleButton from "./actions/ThemeToggleButton";
import Menu from "./menu/Menu";
import UserSection from "./user-section/UserSection";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gradient-to-l from-secondary-100 via-white to-secondary-100 dark:from-black dark:via-secondary-900 dark:to-black border-b border-black/20 dark:border-white/10">
            <div className="px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between items-center py-1">
                    <Brand />
                    <div className="flex items-center space-x-4">
                        <ThemeToggleButton />
                        <UserSection />
                    </div>
                </div>
            </div>
            <Menu />
        </nav>
    );
};

export default Navbar;