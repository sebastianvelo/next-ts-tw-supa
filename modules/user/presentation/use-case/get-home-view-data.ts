import AuthorizationService from "@/modules/authorization/application/service";

const getUserHomeViewData = async () => {
    const user = await AuthorizationService.getCurrentUserOrThrow();

    return { user };
};

export default getUserHomeViewData;
