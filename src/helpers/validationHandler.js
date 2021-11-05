export const validationHandler = (value) => {
  let isError = false;
  let validatedValue = value;
  const regExp = new RegExp(/[^\d|,\s]/g);

  if (regExp.test(value)) {
    isError = true;
    validatedValue = value.replace(regExp, "");
  }
  return { validatedValue, isError };
};
