import { useContext } from "react";
import PropTypes from "prop-types";
import { Collapse, Space, Empty } from "antd";
import { getTasksByType, findHandlerFunc } from "../../helpers";
import { TaskDataContext } from "../App";
import ModalDataEntry from "../ModalDataEntry";
const { Panel } = Collapse;

function CollapseList({ t, type }) {
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
              <Panel header={handlerName} key={id} role="collapse-list__item">
                <Space size={"middle"}>
                  <ModalDataEntry
                    description={t(`taskDescription.${id}`)}
                    handlerFunction={findHandlerFunc(handlerName)}
                    handlerParams={handlerParams}
                  />
                  {t(`taskDescription.${id}`)}
                </Space>
              </Panel>
            );
          })}
        </Collapse>
      )}
    </>
  );
}

ModalDataEntry.propTypes = {
  type: PropTypes.string,
};

export default CollapseList;
