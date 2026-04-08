import TabType from "@/presentation/view/registry/tab-type";
import PageHeaderDTO from "./header";
import PageTabDTO from "./tabs";

interface LayoutDTO<ActionContext = any> {
  header: PageHeaderDTO;
  tabs?: {
    tabs: PageTabDTO<ActionContext>[];
    type: TabType;
  }
}

export default LayoutDTO;
