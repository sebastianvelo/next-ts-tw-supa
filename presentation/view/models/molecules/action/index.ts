import ActionDTO from "./dto";

const buildActions = (actions: (ActionDTO | undefined | false)[]): ActionDTO[] =>
    actions.filter(Boolean) as ActionDTO[];

export default buildActions;