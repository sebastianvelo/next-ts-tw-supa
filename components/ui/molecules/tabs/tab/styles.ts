import { TabType } from "./types";
import getBorderTabStyle from "./styles/border.styles";
import getGhostTabStyle from "./styles/ghost.styles";

const getTabStyle = (type: TabType, horizontal: boolean, active: boolean | undefined): string => {
    switch (type) {
        case TabType.BORDER:
            return getBorderTabStyle(horizontal, active);
        case TabType.GHOST:
        default:
            return getGhostTabStyle(horizontal, active);
    }
};

export default getTabStyle;