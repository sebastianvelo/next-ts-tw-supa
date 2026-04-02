import ActionDTO, { ActionType, ActionVariant } from "@/presentation/view/dto/molecules/action/dto";
import SidebarDTO, { SidebarOptionDTO } from "@/presentation/view/dto/organisms/sidebar";
import Icons from "@/presentation/view/registry/icon-type";

const bodyOptions: SidebarOptionDTO[] = [
    { label: "Home", t: "nav.home", icon: Icons.LAYOUT_DASHBOARD, href: "/", },
    { label: "Profile", t: "nav.profile", icon: Icons.USER, href: "/profile", },
];

const footerOptions: SidebarOptionDTO[] = [
    { label: "Settings", t: "nav.settings", icon: Icons.SETTINGS, href: "/settings", },
    { label: "Help", t: "nav.help", icon: Icons.HELP_CIRCLE, href: "/help", },
];

const actions: ActionDTO[] = [
    {
        label: "+ New",
        type: ActionType.LINK,
        href: "/create",
        variant: ActionVariant.PRIMARY,
    }
];

const buildMenu = (): SidebarDTO => ({
    title: "de.mo",
    subtitle: "This is a template!",
    options: {
        body: bodyOptions,
        footer: footerOptions,
    },
    actions
});

export default buildMenu;