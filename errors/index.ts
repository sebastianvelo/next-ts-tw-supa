import AUTH from "./app/auth.errors";
import AUTHORIZATION from "./app/authorization.errors";
import GENERAL from "./app/general.errors";
import USER from "./app/user.errors";
import VALIDATION from "./app/validation.errors";

const ERRORS = {
    USER,
    AUTH,
    AUTHORIZATION,
    VALIDATION,
    ...GENERAL,
};

export default ERRORS;