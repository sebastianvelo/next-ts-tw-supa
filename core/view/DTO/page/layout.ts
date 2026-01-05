import PageHeaderDTO from "./header";
import PageTabsDTO from "./tabs";

interface LayoutViewDTO<ActionContext = any> {
  header: PageHeaderDTO;
  tabs?: PageTabsDTO<ActionContext>;
}

export default LayoutViewDTO;
