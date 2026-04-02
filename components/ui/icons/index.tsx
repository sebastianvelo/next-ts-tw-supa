import Icons from "@/presentation/view/registry/icon-type";
import {
    LayoutDashboard,
    FileText,
    PlusCircle,
    BarChart2,
    User,
    Settings as SettingsIcon,
    HelpCircle,
    Palette,
    LucideProps
} from "lucide-react";

export const IconRegistry: Record<Icons, React.FC<LucideProps>> = {
    [Icons.LAYOUT_DASHBOARD]: LayoutDashboard,
    [Icons.FILE_TEXT]: FileText,
    [Icons.PLUS_CIRCLE]: PlusCircle,
    [Icons.BAR_CHART_2]: BarChart2,
    [Icons.USER]: User,
    [Icons.SETTINGS]: SettingsIcon,
    [Icons.HELP_CIRCLE]: HelpCircle,
    [Icons.PALETTE]: Palette,
};

interface AppIconProps extends LucideProps {
    name: Icons;
}

export const AppIcon = ({ name, ...props }: AppIconProps) => {
    const IconComponent = IconRegistry[name];
    if (!IconComponent) return null;
    return <IconComponent {...props} />;
};

export * from './GitHubIcon';
export * from './GoogleIcon';
export * from './LinkedInIcon';
export * from './MailIcon';
