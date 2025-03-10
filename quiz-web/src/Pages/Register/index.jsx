import { useNavigate } from "react-router-dom";
import { generateToken } from "../../Helpers/generateToken";
import { register, checkExist } from "../../services/userService";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const checkExitsEmail = await checkExist("email", email);
    if (checkExitsEmail.length > 0) {
      alert("Email đã tồn tại");
    } else {
      const info = {
        fullName: fullName ,
        email: email ,
        password: password,
        token: generateToken(),
      };
      const response = await register(info);
      if (response) {
        navigate("/login");
      } else {
        alert("Đăng kí thất bại");
      }
    }
  };

  return (
    <>
      <>
        <div className="w-full flex flex-col items-center">
          <h2 className="my-10 underline">Đăng kí</h2>
          <form
            className="flex flex-col items-center w-[80%]"
            onSubmit={handleSubmit}
          >
            <input
              className="mb-5 border-[1px] border-[black] p-2 rounded-md"
              type="fullName"
              placeholder="Trần Công Đức"
            ></input>
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
    </>
  );
}
export default Register;
