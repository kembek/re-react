const ReReact = (() => {
  let hooks = [];
  let index = 0;
  const useState = (initialValue) => {
    const localIndex = index;
    index++;

    if (hooks[localIndex] === undefined) {
      hooks[localIndex] = initialValue;
    }

    const setterFunction = (newValue) => {
      hooks[localIndex] = newValue;
    };

    return [hooks[localIndex], setterFunction];
  };

  const useEffect = (callback, dependencyArray) => {
    let hasChanged = true;

    const oldDependencies = hooks[index];

    if (oldDependencies) {
      hasChanged = false;
    }

    if (hasChanged) {
      callback();
    }

    hooks[index] = dependencyArray;
    index++;
  };

  const resetIndex = () => {
    index = 0;
  };

  return {
    useState,
    resetIndex,
  };
})();

const { useState, resetIndex } = ReReact;
const Component = () => {
  const [counterValue, setCounterValue] = useState(1);
  console.log(counterValue);

  if (counterValue !== 2) {
    setCounterValue(2);
  }
};

Component();
resetIndex();
Component();

let hooks = [];
let index = 0;
const useState = (initialValue) => {
  const localIndex = index;
  index++;

  if (hooks[localIndex] === undefined) {
    hooks[localIndex] = initialValue;
  }

  const setterFunction = (newValue) => {
    hooks[localIndex] = newValue;
  };

  return [hooks[localIndex], setterFunction];
};
