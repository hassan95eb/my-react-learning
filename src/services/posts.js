import Swal from "sweetalert2";
import { jpAxios } from "../jpAxios";
export const serviceGetPosts = () => {
  return jpAxios.get("/posts");
};
export const ServicePostPost = async (data) => {
  const res = await jpAxios.post("/posts", data);
  if (res.status === 201) {
    console.log(res);
    Swal.fire({
      title: "بکش  بیرون",
      text: `راضی شدی عقده ای  پست با عنوان ${res.data.title} رو پست کردی `,
      icon: "success",
    });
  }
};
export const ServicePutPost = async (data, postId) => {
  const res = await jpAxios.put(`/posts/${postId}`, data);
  if (res.status === 200) {
    console.log(res);
    Swal.fire({
      title: "ریدی  توش",
      text: `خوشحال شدی تو پست ${res.data.title} ریدی`,
      icon: "success",
    });
  }
};
