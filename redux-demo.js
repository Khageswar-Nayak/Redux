const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  } else {
    return { counter: state.counter + 1 };
  }
};
const store = redux.createStore(counterReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber);

for (let i = 0; i < 4; i++) {
  store.dispatch({ type: "increment" });
}
