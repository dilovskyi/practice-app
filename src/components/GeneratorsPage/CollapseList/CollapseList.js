import { useState, useEffect } from "react";
import { getData } from "../../../services/getData";
import { Collapse, Divider, Space } from "antd";
import ModalDataEntry from "../ModalDataEntry";
import findHandler from "../../../helpers/findHandler";

const { Panel } = Collapse;

function CollapseList({ endpoint, title }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(`http://localhost:3000/${endpoint}`).then((data) => {
      setData(data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Divider orientation="left">{title}</Divider>
      <Collapse>
        {data.map((item, index) => {
          const { id, type, description, handlerName, handlerParams } = item;
          return (
            <Panel header={handlerName} key={index}>
              <Space size={"middle"}>
                {item.description}
                <ModalDataEntry
                  id={id}
                  type={type}
                  description={description}
                  handler={findHandler(handlerName)}
                  handlerParams={handlerParams}
                />
              </Space>
            </Panel>
          );
        })}
      </Collapse>
    </>
  );
}

export default CollapseList;
