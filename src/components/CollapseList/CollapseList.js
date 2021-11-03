import * as vanillaJsTasks from "../../vanillaJs";
import { useContext } from "react";
import { Trans } from "react-i18next";
import { Collapse, Space, Empty } from "antd";
import { TaskDataContext } from "../App";
import ModalDataEntry from "../ModalDataEntry";
const { Panel } = Collapse;

function findHandler(handlerName) {
  for (let key in vanillaJsTasks) {
    if (handlerName === key) {
      return vanillaJsTasks[key];
    }
  }
}

function getTasksByType(dataTasks, type) {
  return dataTasks.filter((item) => item.type === type);
}

function CollapseList({ type }) {
  // Get all data
  const dataTasks = useContext(TaskDataContext);
  // Get filtered data by page type
  const pageData = getTasksByType(dataTasks, type);

  return (
    <>
      {pageData.length < 1 ? (
        <Empty />
      ) : (
        <Collapse>
          {pageData.map((item) => {
            const { id, handlerName, handlerParams } = item;
            return (
              <Panel header={handlerName} key={id}>
                <Space size={"middle"}>
                  <ModalDataEntry
                    description={<Trans i18nKey={`taskDescription.${id}`} />}
                    handlerFunction={findHandler(handlerName)}
                    handlerParams={handlerParams}
                  />
                  <Trans i18nKey={`taskDescription.${id}`} />
                </Space>
              </Panel>
            );
          })}
        </Collapse>
      )}
    </>
  );
}

export default CollapseList;
