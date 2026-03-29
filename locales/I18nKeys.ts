import FORM from "./app/form/wordings";
import COMMON from "./app/layout/common";
import LOADING from "./app/layout/loading";
import NAVBAR from "./app/layout/navbar";
import LOGIN from "./app/login/wordings";
import USER from "./app/user/wordings";

const I18n = {
    NAVBAR,
    FORM,
    LOGIN,
    LOADING,
    USER,
    COMMON,
} as const;

export default I18n;