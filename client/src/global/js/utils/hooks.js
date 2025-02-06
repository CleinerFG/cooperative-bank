export function createState(initialValue) {
  let state = initialValue;

  function getState() {
    return state;
  }

  function setState(newState) {
    state = newState;
  }

  return [getState, setState];
}

export function createEffect(callback) {
  let isFirstRun = true;

  function runEffect(state) {
    if (isFirstRun) {
      isFirstRun = false;
    } else {
      callback(state);
    }
  }

  return runEffect;
}
