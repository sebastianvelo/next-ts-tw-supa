import PageHeaderDTO from "./header";
import PageNavigatorDTO from "./tabs";

interface LayoutViewDTO<ActionContext = any> extends PageNavigatorDTO<ActionContext> {
  header: PageHeaderDTO;
}

export default LayoutViewDTO;
