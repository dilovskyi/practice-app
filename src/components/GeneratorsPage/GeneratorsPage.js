import { useState, useEffect } from "react";
import { getData } from "../../services/getData";
import CollapseList from "./CollapseList";

function GeneratorsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData("http://localhost:3000/homework_1").then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <CollapseList data={data} title={"Домашняя работа №1"} />
      <CollapseList data={data} title={"Домашняя работа №2"} />
      <CollapseList data={data} title={"Домашняя работа №3"} />
    </>
  );
}

export default GeneratorsPage;
