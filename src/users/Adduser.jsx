import { useParams, Outlet, useNavigate } from "react-router";
import "./adduser.css";
import { useState, useEffect } from "react";
// import axios from "axios";
import { jpAxios } from "../jpAxios";
// import Swal from "sweetalert2";
import { servicePostUser, servicePutUser } from "../services/addUser";
export default function Adduser() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      city: "",
      street: "",
      suite: "",
      zicode: "",
    },
  });

  useEffect(() => {
    jpAxios.get(`/users/${userId}`).then((res) => {
      setData({
        name: res.data.name,
        username: res.data.username,
        email: res.data.email,
        address: {
          city: res.data.address.city,
          street: res.data.address.street,
          suite: res.data.address.suite,
          zicode: res.data.address.zipcode,
        },
      });
    });
  });

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!userId) {
      servicePostUser(data);
    } else {
      servicePutUser(data, userId);
    }
  }

  return (
    <div className="form-box">
      <form onSubmit={handleSubmitForm}>
        {userId ? (
          <h2 className="text-center">ویرایش</h2>
        ) : (
          <h2 className="text-center">افزودن</h2>
        )}
        <hr className="form-hr" />
        <div className="name-form">
          <label>نام و نام خانوادگی</label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className="username-form">
          <label>نام کاربری</label>
          <input
            type="text"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </div>
        <div className="email-form">
          <label>ایمیل</label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </div>
        <h4 className="address-title">آدرس</h4>
        <div className="row">
          <div className="col-12 col-md-6">
            <input
              type="text"
              placeholder="شهر"
              value={data.address.city}
              onChange={(e) => {
                setData({
                  ...data,
                  address: { ...data.address, city: e.target.value },
                });
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="text"
              placeholder="خیابان"
              value={data.address.street}
              onChange={(e) => {
                setData({
                  ...data,
                  address: { ...data.address, street: e.target.value },
                });
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="text"
              placeholder="ادامه آدرس"
              value={data.address.suite}
              onChange={(e) => {
                setData({
                  ...data,
                  address: { ...data.address, suite: e.target.value },
                });
              }}
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="text"
              placeholder="کدپستی "
              value={data.address.zicode}
              onChange={(e) => {
                setData({
                  ...data,
                  address: { ...data.address, zicode: e.target.value },
                });
              }}
            />
          </div>
        </div>
        <div className="text-start submit-section">
          <button
            className="submit-btn-cancel ms-2"
            onClick={(e) => {
              navigate(-1);
              e.preventDefault();
            }}
          >
            بازگشت
          </button>
          <button className="submit-btn " type="submit">
            ثبت
          </button>
        </div>
      </form>
      <Outlet />
    </div>
  );
}
