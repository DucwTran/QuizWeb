import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../Helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { stateLogin } from "../../Redux/loginSlice";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  deleteAllCookies();

  useEffect(() => {
    dispatch(stateLogin());
    navigate("/login");
  }, [navigate, dispatch]);
  return <></>;
}
export default Logout;
