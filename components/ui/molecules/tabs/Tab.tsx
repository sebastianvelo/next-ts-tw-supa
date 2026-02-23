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
    const translatedLabel = t(label);

    return href ? (
        <Link className={`${className} block`} href={href} title={translatedLabel}>
            <span className="block truncate group-hover:whitespace-normal">{translatedLabel}</span>
        </Link>
    ) : (
        <button onClick={() => onClick?.(id)} className={`${className} block`} title={translatedLabel}>
            <span className="block truncate group-hover:whitespace-normal">{translatedLabel}</span>
        </button>
    );
};

export default Tab;