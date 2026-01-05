import PageTabsDTO from "@/core/view/DTO/page/tabs";
import I18n from "@/locales/I18nKeys";
import ROUTES from "@/routes/client/routes";

const buildUserTabs = (): PageTabsDTO => ({
    tabs: [
        { label: I18n.USER.LAYOUT.TABS.ABOUT, href: ROUTES.USER.ROOT },
        { label: I18n.USER.LAYOUT.TABS.INSTITUTIONS, href: ROUTES.USER.INSTITUTIONS },
        { label: I18n.USER.LAYOUT.TABS.COURSES, href: ROUTES.USER.COURSES },
        { label: I18n.USER.LAYOUT.TABS.NOTES, href: ROUTES.USER.NOTES },
        { label: I18n.USER.LAYOUT.TABS.SUBMISSIONS, href: ROUTES.USER.SUBMISSIONS },
    ]
});

export default buildUserTabs;