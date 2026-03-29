import TextListSection from "@/layout/text-section/TextListSection";
import UIType from "@/presentation/view/registry/types";
import PageCardListView from "./card/PageCardListView";
import PageFormView from "./form/PageFormView";
import PageTableView from "./table/PageTableView";

const SECTION_COMPONENTS: Record<UIType, React.ComponentType<any>> = {
    [UIType.TABLE_SECTION]: PageTableView,
    [UIType.FORM_SECTION]: PageFormView,
    [UIType.CARD_LIST_SECTION]: PageCardListView,
    [UIType.TEXT_LIST_SECTION]: TextListSection,
} as const;

export default SECTION_COMPONENTS;