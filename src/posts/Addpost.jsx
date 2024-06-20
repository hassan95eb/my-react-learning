/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router";
import "./addPosts.css";
import { useEffect, useState } from "react";
import { jpAxios } from "../jpAxios";
import { ServicePostPost, ServicePutPost } from "../services/posts";
export default function Addpost() {
  const navigate = useNavigate();
  const [user, setUser] = useState([]);
  const { postId } = useParams();
  const [data, setData] = useState({
    id: "",
    userId: "",
    title: "",
    body: "",
  });
  useEffect(() => {
    jpAxios.get("/users").then((res) => setUser(res.data));
    if (postId) {
      jpAxios.get(`/posts/${postId}`).then((res) => {
        setData(res.data);
      });
    }
  }, []);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (postId) {
      await ServicePutPost(data, postId);
    } else {
      await ServicePostPost(data);
    }
    navigate(-1);
  };
  return (
    <div className="form-post">
      <form className="post-from" onSubmit={handleSubmitForm}>
        <h3 className="text-center h2">
          {postId ? "ویرایش کاربر" : "افزودن کاربر"}
        </h3>
        <hr className="w-100" />
        <div className="main-form w-75">
          <div className="user-name-formPost my-2">
            <label htmlFor="name-client" className="col-md-4">
              نام کاربری
            </label>
            <select
              name="name-client"
              id="name-client"
              value={data.userId}
              onChange={(e) => {
                setData({ ...data, userId: e.target.value });
              }}
              className="d-block w-100"
            >
              <option value="">نام کاربر را انتخاب نمایید</option>
              {user.map((h) => {
                return (
                  <option key={h.id} value={h.id}>
                    {h.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="userId-formPost  my-2">
            <label htmlFor="userId" className="d-block ">
              آیدی کاربر
            </label>
            <input
              type="number"
              name="userId"
              value={data.userId}
              className="w-100"
              onChange={(e) => {
                setData({ ...data, userId: e.target.value });
              }}
            />
          </div>
          <div className="post-title  my-2">
            <label htmlFor="post-title" className="d-block">
              عنوان
            </label>
            <input
              type="text"
              name="post-title"
              value={data.title}
              className="d-block w-100"
              onChange={(e) => {
                setData({ ...data, title: e.target.value });
              }}
            />
          </div>
          <div className="description-postform  my-2">
            <label htmlFor="description-post-form" className="d-block">
              توضیحات
            </label>
            <textarea
              name="description-post-form"
              className="d-block w-100"
              rows={7}
              value={data.body}
              onChange={(e) => {
                setData({ ...data, body: e.target.body });
              }}
            ></textarea>
          </div>
          <div className="d-flex justify-content-end align-items-center">
            <button
              type="button"
              className="btn btn-outline-danger "
              onClick={() => {
                navigate(-1);
              }}
            >
              انصراف
            </button>
            <button type="submit" className="btn btn-success me-2">
              {postId ? "ذخیره" : "ثبت"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
