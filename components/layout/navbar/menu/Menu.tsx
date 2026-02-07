import PageTabs from "@/components/layout/main/PageTabs";

const tabs = [
    {
        label: "Inicio",
        href: "/user",
    },
];

interface MenuProps {

}

const Menu: React.FC<MenuProps> = () => {
    return (
        <PageTabs horizontal tabs={tabs} />
    );
}

export default Menu;