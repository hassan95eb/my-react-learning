import { useReducer } from "react";
import style from "../style.module.css";
const init = {
  value1: 0,
  value2: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, value1: state.value1 + action.valv };
    case "decrement":
      return { ...state, value1: state.value1 - action.valv };
    case "increment2":
      return { ...state, value2: state.value2 + action.valv };
    case "decrement2":
      return { ...state, value2: state.value2 - action.valv };
    case "reset":
      return init;
    default:
      break;
  }
};
const Todos = () => {
  const [state, dispatch] = useReducer(reducer, init);
  // const [count, setCount] = useState(0);
  // const handleClickCount = () => {
  //   setCount(count + 1);
  // };
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کارها </h4>
      <div className="text-cener">{state.value1}</div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            dispatch({ type: "increment", valv: 3 });
          }}
        >
          افزایش
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: "decrement", valv: 2 });
          }}
        >
          کاهش
        </button>
      </div>
      <hr />
      <div className="text-cener">{state.value2}</div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            dispatch({ type: "increment2", valv: 1 });
          }}
        >
          افزایش
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            dispatch({ type: "decrement2", valv: 2 });
          }}
        >
          کاهش
        </button>
      </div>
      <div className=" mt-4">
        <button
          type="button"
          className="btn btn-info"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          ریست
        </button>
      </div>
    </div>
  );
};

export default Todos;
