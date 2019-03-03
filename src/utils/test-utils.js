export const getWrapperByName = (wrapper, name) =>
  wrapper.find(`input[name='${name}']`);
export const getValueOfInput = (wrapper, name) => {
  return wrapper.find(`input[name='${name}']`).props().value;
};
