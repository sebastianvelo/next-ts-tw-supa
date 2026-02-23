import CardListSection from "@/components/ui/layout/card-section/CardListSection";
import { UIType } from "./types";

const SECTION_COMPONENTS = {
    [UIType.CARD_LIST_SECTION]: CardListSection,
} as const;

function getComponent(id: UIType): React.ComponentType<any> | null {
    const Component = SECTION_COMPONENTS[id];

    if (!Component) {
        console.warn(`[PageTabsView] No component found for ui: ${id}`);
        return null;
    }

    return Component;
}

export default getComponent;