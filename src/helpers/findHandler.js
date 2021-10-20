import * as homework_1 from "../vanillaJs/homework_1/homework_1";

const findHandler = (handlerName) => {
  for (let key in homework_1) {
    if (handlerName === key) {
      return homework_1[key];
    }
  }
};

export default findHandler;
