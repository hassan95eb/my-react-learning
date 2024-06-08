import { useState } from "react";

const Counter = (MainComponent) => {
  const NewComponent = () => {
    const [count, setCount] = useState(0);
    function handleClickBtn() {
      setCount(count + 1);
    }
    return <MainComponent handleClickBtn={handleClickBtn} count={count} />;
  };
  return NewComponent;
};
export default Counter;
