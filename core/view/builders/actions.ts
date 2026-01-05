import ActionDTO from "../DTO/common/action";

const buildActions = (actions: (ActionDTO | undefined | false)[]): ActionDTO[] =>
    actions.filter(Boolean) as ActionDTO[];

export default buildActions;