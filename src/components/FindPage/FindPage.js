import CollapseList from "../CollapseList";
import { PAGE_TYPE } from "../../constants";

function FindPage() {
  return <CollapseList type={PAGE_TYPE.find} />;
}

export default FindPage;
