import Counter from "./Counter";
import PropTypes from "prop-types";
const HoverCounter = (props) => {
  const { count, handleClickBtn } = props;
  return (
    <div>
      <button className="mb-2 d-block" onMouseOver={handleClickBtn}>
        increse:{count}
      </button>
    </div>
  );
};
HoverCounter.prototype = {
  count: PropTypes.number.isRequired,
  handleClickBtn: PropTypes.func.isRequired,
};

export default Counter(HoverCounter);
