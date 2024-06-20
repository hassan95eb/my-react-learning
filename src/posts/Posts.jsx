/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import { useEffect, useState } from "react";
import { serviceGetPosts } from "../services/posts";
import Swal from "sweetalert2";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [mainPosts, setMainPosts] = useState([]);
  const [uId, setUId] = useState();
  const navigate = useNavigate();
  const getPosts = async () => {
    const res = await serviceGetPosts();
    setPosts(res.data);
    setMainPosts(res.data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  const handleSearch = () => {
    if (uId > 0) {
      setPosts(mainPosts.filter((u) => u.userId === uId));
    } else {
      setPosts(mainPosts);
    }
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "آیا مطمئنی ",
      text: `ایا قصد دارید پست با ${id} را به فنا دهید`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله میخواهم حذف شود",
      cancelButtonText: "بیخیال",
    }).then((result) => {
      if (result.isConfirmed) {
        const newPosts = posts.filter((u) => u.id != id);
        setPosts(newPosts);
        Swal.fire({
          title: "به فنا رفتید!",
          text: "حساب  کاربری شما به فنا رفته است ",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "خطا",
          text: "چه عجب  بیخیال  شدی  تو ریدن  در  سایت ",
          icon: "error",
        });
      }
    });
  };
  useEffect(() => {
    handleSearch();
  }, [uId]);
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت پست ها</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="number"
            value={uId}
            className="form-control shadow"
            placeholder="جستجو"
            onChange={(e) => setUId(Number(e.target.value))}
          />
        </div>
        <div className="col-2 text-start px-0">
          <Link to="/posts/addpost">
            <button className="btn btn-success">
              <i className="fas fa-plus text-light"></i>
            </button>
          </Link>
        </div>
      </div>
      <table className="table bg-light shadow">
        <thead>
          <tr>
            <th>#</th>
            <th>userID</th>
            <th>عنوان</th>
            <th>محتوا</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td
                  style={{ cursor: "pointer" }}
                  className="text-primary"
                  onClick={() => {
                    setUId(u.userId);
                  }}
                >
                  {u.userId}
                </td>
                <td>{u.title}</td>
                <td>{u.body}</td>
                <td>
                  <i
                    className="fas fa-edit text-warning mx-2 pointer"
                    onClick={() => {
                      navigate(`/posts/addPost/${u.id}`);
                    }}
                  ></i>
                  <i
                    className="fas fa-trash text-danger mx-2 pointer"
                    onClick={() => handleDelete(u.id)}
                  ></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Posts;
