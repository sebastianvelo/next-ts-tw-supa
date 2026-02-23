import { PageTabDTO } from "@/core/view/DTO/page/tabs";
import I18n from "@/locales/I18nKeys";
import ROUTES from "@/routes/client/routes";

const buildUserTabs = (): PageTabDTO[] => [
    { label: I18n.USER.LAYOUT.TABS.ABOUT, href: ROUTES.USER.ROOT },
];

export default buildUserTabs;