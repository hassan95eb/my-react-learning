import axios from "axios";
export const jpAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 3000,
  timeoutErrorMessage: "api  به فنا رفت ومن یقرا الفاتحه مع الصلوات",
});
