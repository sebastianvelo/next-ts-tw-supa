import useI18N from "@/hooks/lang/useI18N";
import Link from "next/link";
import getTabStyle from "./Tab.styles";

export interface TabProps {
    id: string;
    label: string;
    active?: boolean;
    onClick?: (id: string) => void;
    href?: string;
    horizontal?: boolean;
}

const Tab: React.FC<TabProps> = ({ id, label, active, onClick, href, horizontal = false }) => {
    const { t } = useI18N();
    const className = getTabStyle(horizontal, active);

    return href ? (
        <Link className={className} href={href}>
            {t(label)}
        </Link>
    ) : (
        <button onClick={() => onClick?.(id)} className={className}>
            {t(label)}
        </button>
    );
};

export default Tab;
