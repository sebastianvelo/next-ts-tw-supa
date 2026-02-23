"use client";
import Text from "@/components/ui/atoms/text/Text";
import useTheme from "@/hooks/theme/useTheme";
import I18n from "@/locales/I18nKeys";

const ThemeSelector: React.FC = () => {
    const { theme, applyTheme, themes } = useTheme();

    const className = "w-6 h-6 rounded-full hover:scale-110 transition-transform ring-2 ring-offset-2 ring-offset-white dark:ring-offset-black";

    return (
        <div className="space-y-2">
            <Text t={I18n.NAVBAR.THEME} size="xs" weight="bold" />
            <div className="grid grid-cols-6 gap-2 justify-between py-2">
                {themes.map((t) => (
                    <button
                        key={t.name}
                        onClick={() => applyTheme(t.name)}
                        className={`${className} ${t.color} ${theme === t.name ? "ring-secondary-900 dark:ring-secondary-300" : "ring-transparent"}`}
                        aria-label={t.label}
                    />
                ))}
            </div>
        </div>
    );
}

export default ThemeSelector;