import { useContext } from "react";
import { MainContext } from "./contexts/MainContext";
import style from "./style.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);

  return (
    <div
      className={`${style.sidebar_section} bg-secondary`}
      style={showMenu ? { right: 0 } : {}}
    >
      <ul className={`${style.sidebar_list} m-0 p-0`}>
        <li className={style.sidebar_avatar}>
          <img src="" alt="" />
        </li>
        <li>
          <Link to="/users">کاربران</Link>
        </li>
        <li>
          <Link to="/posts">پست ها</Link>
        </li>
        <li>
          <Link to="/gallery">گالری</Link>
        </li>
        <li>
          <Link to="/todos">کارها</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
