import CollapseList from "../CollapseList";
import { PAGE_TYPE } from "../../constants";

function GeneratorsPage() {
  return <CollapseList type={PAGE_TYPE.generate} />;
}

export default GeneratorsPage;
