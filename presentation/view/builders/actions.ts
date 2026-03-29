import ActionDTO from "../dto/common/action";

const buildActions = (actions: (ActionDTO | undefined | false)[]): ActionDTO[] =>
    actions.filter(Boolean) as ActionDTO[];

export default buildActions;