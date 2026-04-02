import AuthorizationService from "@/modules/authorization/application/service";

const getUserLayoutViewData = async () => {
    const user = await AuthorizationService.getCurrentUserOrThrow();

    return { user, id: user.id };
};

export default getUserLayoutViewData;
