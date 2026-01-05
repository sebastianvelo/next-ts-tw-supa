import PageTabs from "@/components/layout/main/PageTabs";

const tabs = [
    {
        label: "Inicio",
        href: "/user",
    },
    {
        label: "Instituciones",
        href: "/institutions",
    },
    {
        label: "Carreras",
        href: "/programs",
    },
    {
        label: "Cursos",
        href: "/courses",
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