import { Link, useNavigate } from "react-router-dom";
import style from "../style.module.css";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [user, setUser] = useState([]);
  function handleDelete(id) {
    Swal.fire({
      title: "آیا مطمئنی ",
      text: `حساب کاربری ${id} به فنا رفته است و حذف  کرده اید`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله میخواهم حذف شود",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "delete",
          url: `https://jsonplaceholder.typicode.com/users/${id}`,
        }).then((res) => {
          if (res.status === 200) {
            const newUser = user.filter((u) => u.id != id);
            setUser(newUser);
            Swal.fire({
              title: "به فنا رفتید!",
              text: "حساب  کاربری شما به فنا رفته است ",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "خطا",
              text: "see this shitty error test test",
              icon: "error",
            });
          }
        });
      } else {
        Swal.fire({
          title: "خدا رحم کرد ",
          text: "حساب کاربری  حذف  نشده است ",
          icon: "error",
        });
      }
    });
  }

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUser(res.data);
    });
  }, []);
  const navigate = useNavigate();
  return (
    <div className={`${style.item_content} mt-5 p-4 container-fluid`}>
      <h4 className="text-center">مدیریت کاربران</h4>
      <div className="row my-2 mb-4 justify-content-between w-100 mx-0">
        <div className="form-group col-10 col-md-6 col-lg-4">
          <input
            type="text"
            className="form-control shadow"
            placeholder="جستجو"
          />
        </div>
        <div className="col-2 text-start px-0">
          <Link to="/users/addUser">
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
            <th>نام</th>
            <th>نام کاربری</th>
            <th>ایمیل</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u) => {
            return (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>
                  <i
                    className="fas fa-edit text-warning mx-2 pointer"
                    onClick={() => {
                      navigate("/users/addUser/2");
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

export default Users;
