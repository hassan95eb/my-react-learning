import Counter from "./Counter";

const ClickCount = (props) => {
  return (
    <div>
      <button className="mb-2 d-block" onClick={props.handleClickBtn}>
        increse:{props.count}
      </button>
    </div>
  );
};
const ClickCountHoc = Counter(ClickCount);

export default ClickCountHoc;
