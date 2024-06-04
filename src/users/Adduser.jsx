import { useParams, Outlet } from "react-router";
import "./adduser.css";
export default function Adduser() {
  const userId = useParams();
  console.log(userId);
  return (
    <div className="form-box">
      <form>
        <h2 className="text-center">ویرایش</h2>
        <hr className="form-hr" />
        <div className="name-form">
          <label>نام و نام خانوادگی</label>
          <input type="text" />
        </div>
        <div className="username-form">
          <label>نام کاربری</label>
          <input type="text" />
        </div>
        <div className="email-form">
          <label>ایمیل</label>
          <input type="email" />
        </div>
        <h4 className="address-title">آدرس</h4>
        <div className="row">
          <div className="col-12 col-md-6">
            <input type="text" placeholder="شهر" />
          </div>
          <div className="col-12 col-md-6">
            <input type="text" placeholder="خیابان" />
          </div>
          <div className="col-12 col-md-6">
            <input type="text" placeholder="ادامه آدرس" />
          </div>
          <div className="col-12 col-md-6">
            <input type="text" placeholder="کدپستی " />
          </div>
        </div>
        <div className="text-start submit-section">
          <button className="submit-btn-cancel ms-2" type="submit">
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
