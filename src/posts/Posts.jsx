import style from "../style.module.css";
import ClickCountHoc from "./ClickCount";

import HoverCounter from "./HoverCounter";

const Posts = () => {
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت پست ها</h4>
      <div className="mb-4">
        <ClickCountHoc />
        <HoverCounter />
      </div>
    </div>
  );
};

export default Posts;
