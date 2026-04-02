import I18n from "@/locales/I18nKeys";
import { PageTabDTO } from "@/presentation/view/models/main/tabs";
import ROUTES from "@/routes/view";

const buildUserTabs = (): PageTabDTO[] => [
    { label: I18n.USER.LAYOUT.TABS.ABOUT, href: ROUTES.USER.ROOT },
];

export default buildUserTabs;