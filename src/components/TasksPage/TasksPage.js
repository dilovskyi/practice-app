import CollapseList from "../CollapseList";

function TasksPage({ location }) {
  console.log(location);
  const pageType = location.slice(1, location.length);
  return <CollapseList type={pageType} />;
}

export default TasksPage;
