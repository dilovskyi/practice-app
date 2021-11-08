import CollapseList from "../CollapseList";
import { useLocation } from "react-router-dom";

function TasksPage() {
  let location = useLocation();
  const pageType = location.pathname.slice(1, location.length);
  return <CollapseList type={pageType} />;
}

export default TasksPage;
