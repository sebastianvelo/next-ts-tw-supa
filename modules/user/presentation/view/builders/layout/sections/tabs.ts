import I18n from "@/locales/I18nKeys";
import { PageTabDTO } from "@/presentation/view/dto/page/tabs";
import ROUTES from "@/routes/client";

const buildUserTabs = (): PageTabDTO[] => [
    { label: I18n.USER.LAYOUT.TABS.ABOUT, href: ROUTES.USER.ROOT },
];

export default buildUserTabs;