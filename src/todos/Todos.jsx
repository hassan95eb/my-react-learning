import { useReducer } from "react";
import style from "../style.module.css";
const init = {
  value1: 0,
  value2: 0,
};
const reducer = (state, action) => {
  switch (action) {
    case "incremet":
      return { ...state, value1: state.value1 + 1 };
    case "decrement":
      return { ...state, value1: state.value1 - 1 };
    case "reset":
      return init;
    default:
      return state;
  }
};
const Todos = () => {
  const [count, dispatch] = useReducer(reducer, init);
  // const [count, setCount] = useState(0);
  // const handleClickIncrement = () => {
  //   setCount(count + 1);
  // };
  // const handleClickDecrese = () => {
  //   setCount(count - 1);
  // };
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کارها </h4>
      <div>{count.value1}</div>
      <button onClick={() => dispatch("incremet")}>افزایش</button>
      <button onClick={() => dispatch("decrement")}>کاهش</button>
      <button onClick={() => dispatch("reset")}>ریست</button>
    </div>
  );
};

export default Todos;
