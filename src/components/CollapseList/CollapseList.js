import { useContext } from "react";
import { Collapse, Space, Empty } from "antd";
import { findHandler, getTasksByType } from "../../helpers/findHandler";
import { TaskContext, LanguageContext } from "../App/App";
import ModalDataEntry from "../ModalDataEntry";
const { Panel } = Collapse;

// Change the method of passing a parameter
function CollapseList({ type }) {
  const pageLanguage = useContext(LanguageContext);
  // Get all data
  const dataTasks = useContext(TaskContext);
  // Get filtered data by page type
  const pageData = getTasksByType(dataTasks, type);

  return (
    <>
      {pageData.length < 1 ? (
        <Empty />
      ) : (
        <Collapse>
          {pageData.map((item) => {
            const { id, description, handlerName, handlerParams } = item;
            return (
              <Panel header={handlerName} key={id}>
                <Space size={"middle"}>
                  <ModalDataEntry
                    pageLanguage={pageLanguage}
                    description={description[pageLanguage]}
                    handlerFunction={findHandler(handlerName)}
                    handlerParams={handlerParams}
                  />
                  {description[pageLanguage]}
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
