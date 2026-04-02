import UIType from "@/presentation/view/registry/ui-type";
import SECTION_COMPONENTS from "./registry";

type SectionComponentType = typeof SECTION_COMPONENTS[keyof typeof SECTION_COMPONENTS];

function getComponent(id: UIType): SectionComponentType | null {
    const Component = SECTION_COMPONENTS[id];

    if (!Component) {
        console.warn(`[PageTabsView] No component found for ui: ${id}`);
        return null;
    }

    return Component;
}

export default getComponent;