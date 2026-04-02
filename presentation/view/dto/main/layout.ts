import PageHeaderDTO from "./header";
import PageTabDTO from "./tabs";

interface PageLayoutDTO<ActionContext = any> {
  header: PageHeaderDTO;
  tabs?: PageTabDTO<ActionContext>[];
}

export default PageLayoutDTO;
