import Swal from "sweetalert2";
import { jpAxios } from "../jpAxios";

export const servicePostUser = async (data) => {
  const res = jpAxios.post("/users", data);
  if (res) {
    console.log(res);
    Swal.fire({
      title: "خوشحال شو ",
      text: "حساب کاربری ایجاد شده است ",
      icon: "success",
    });
  }
};
export const servicePutUser = async (data, userId) => {
  const res = jpAxios.put(`/users/${userId}`, data);
  if (res) {
    console.log(res);
    Swal.fire({
      title: "راضی شدی",
      text: "ریده شد تو حساب  کاربری",
      icon: "success",
    });
  }
};
