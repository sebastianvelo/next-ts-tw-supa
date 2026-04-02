"use client"
import ThemeToggleButton from "./actions/ThemeToggleButton";
import UserSection from "./user-section/UserSection";

const Header: React.FC = () => (
    <header className="flex items-center justify-end space-x-2 py-3 px-4">
        <ThemeToggleButton />
        <UserSection />
    </header>
);

export default Header;