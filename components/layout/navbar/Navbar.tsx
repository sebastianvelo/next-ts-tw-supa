"use client"
import Sidebar from "@/components/ui/organisms/sidebar";
import useFetchView from "@/hooks/view/useFetchView";
import Loading from "@/molecules/loading/Loading";
import SidebarDTO from "@/presentation/view/models/organisms/sidebar/dto";
import API from "@/routes/api";

const Navbar: React.FC = () => {
    const { props, isLoading, error } = useFetchView<SidebarDTO>(API.LAYOUT.MENU);
    if (isLoading) return <Loading isLoading />;
    if (!props) return null;

    return (
        <Sidebar {...props} />
    );
}

export default Navbar;