import { NavLink, Outlet } from "react-router-dom";
import { getCookie } from "../../Helpers/cookie";
import { useSelector } from "react-redux";
import { useEffect } from "react";
function LayoutDefault() {
  const token = getCookie("token");
  const isLogin = useSelector((state) => state.isLogin);
  useEffect(() => {}, [isLogin]);
  return (
    <>
      <div className="w-full flex justify-center bg-orange-500 p-5 ">
        <div className="navbar w-[90%] flex justify-between">
          <div>Logo</div>

          <div className="flex gap-[30px]">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            {token && (
              <>
                <NavLink to="/topic">Topic</NavLink>
                <NavLink to="/answer">Answer</NavLink>
              </>
            )}
          </div>

          {token ? (
            <NavLink to="/logout">Logout</NavLink>
          ) : (
            <div>
              <NavLink className="mr-5" to="/login">
                Đăng nhập
              </NavLink>
              <NavLink to="/register">Đăng kí</NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Outlet />
      </div>
      <div className="footer w-full flex justify-center bg-orange-500 p-5">
        Copyright by DucwTran@
      </div>
    </>
  );
}
export default LayoutDefault;
