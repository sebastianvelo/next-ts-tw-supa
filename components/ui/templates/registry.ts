import TextListSection from "@/molecules/section/text-section/TextListSection";
import UIType from "@/presentation/view/registry/ui-type";
import PageFormView from "./form/PageFormView";
import PageCardListView from "./list/variants/card/PageCardListView";
import PageTableView from "./list/variants/table/PageTableView";

const SECTION_COMPONENTS: Record<UIType, React.ComponentType<any>> = {
    [UIType.TABLE_SECTION]: PageTableView,
    [UIType.FORM_SECTION]: PageFormView,
    [UIType.CARD_LIST_SECTION]: PageCardListView,
    [UIType.TEXT_LIST_SECTION]: TextListSection,
} as const;

export default SECTION_COMPONENTS;