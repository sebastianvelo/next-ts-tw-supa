"use client"
import ThemeToggleButton from "./actions/ThemeToggleButton";
import UserSection from "./user-section/UserSection";

const Header: React.FC = () => (
    <header className="z-30 md:z-0 w-full fixed md:relative flex items-center justify-end space-x-2 py-3 px-4 border-b border-secondary-200 dark:border-secondary-800 bg-white dark:bg-secondary-900">
        <ThemeToggleButton />
        <UserSection />
    </header>
);

export default Header;