import PageTabs from "@/components/layout/main/navigator/PageTabs";

const tabs = [
    {
        label: "Inicio",
        href: "/user",
    },
];

interface MenuProps {

}

const Menu: React.FC<MenuProps> = () => (
    <PageTabs horizontal tabs={tabs} />
);

export default Menu;