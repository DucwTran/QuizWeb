import { login } from "../../services/userService";
import { useNavigate} from "react-router-dom"
import { setCookie } from "../../Helpers/cookie"
import { useDispatch } from "react-redux"; 
import { stateLogin } from "../../Redux/loginSlice";


function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password  = e.target[1].value
    const response = await login(email, password);
    if( response.length > 0) {
      console.log(response)
      setCookie("id", response[0].id, 1);
      setCookie("fullname", response[0].fullName, 1);
      setCookie("email", response[0].email, 1);
      setCookie("token", response[0].token, 1);
      dispatch(stateLogin())
      navigate("/")
    } else {
      alert("Sai tài khoản hoặc mật khẩu")
    }
  }

  return (
    <>
      <div className="w-full flex flex-col items-center">
        <h2 className="my-10 underline">Đăng nhập</h2>
        <form className="flex flex-col items-center w-[80%]" onSubmit={handleSubmit}>
          <input
            className="mb-5 border-[1px] border-[black] p-2 rounded-md"
            type="email"
            placeholder="trancongduc@gmail.com"
            autoComplete="email"
          ></input>
          <input
            className="mb-5 border-[1px] border-[black] p-2 rounded-md"
            type="password"
            placeholder="Nhập mật khẩu"
            autoComplete="current-password"
          ></input>
          <button
            className="mb-5 border-[1px] border-[black] py-1 px-3 rounded-md"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
export default Login;
