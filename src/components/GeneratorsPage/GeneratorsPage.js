import CollapseList from "./CollapseList";

function GeneratorsPage() {
  return (
    <>
      <CollapseList endpoint={"homework_1"} title={"Домашняя работа №1"} />
      <CollapseList endpoint={"homework_2"} title={"Домашняя работа №2"} />
      <CollapseList endpoint={"homework_3"} title={"Домашняя работа №3"} />
    </>
  );
}

export default GeneratorsPage;
