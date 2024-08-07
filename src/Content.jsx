import { useContext } from "react";
import { MainContext } from "./contexts/MainContext";
import Gallery from "./gallery/Gallery";
import Posts from "./posts/Posts";
import style from "./style.module.css";
import Todos from "./todos/Todos";
import Users from "./users/Users";
import { Route, Routes } from "react-router";
import Adduser from "./users/Adduser";
import EditPm from "./users/EditPm";
import Addpost from "./posts/Addpost";
import Signin from "./Auth/Signin";

const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);

  const handleShowMenu = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  return (
    <div
      className={style.content_section}
      onClick={() => {
        setShowMenu(false);
      }}
    >
      <i
        className={`${style.menu_button} fas fa-bars text-dark m-2 pointer`}
        onClick={handleShowMenu}
      ></i>
      <Routes>
        {/* User Routes */}
        <Route path="/users" element={<Users />} />
        <Route path="/users/addUser" element={<Adduser />}>
          <Route path=":userId" element={<EditPm />} />
        </Route>
        {/* User Routes */}
        {/* Post Routes */}
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/addPost" element={<Addpost />}>
          <Route path=":postId" />
        </Route>
        {/* Post Routes*/}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="*" element={<Users />} /> */}
      </Routes>
    </div>
  );
};

export default Content;
