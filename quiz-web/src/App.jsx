import './App.css'
import AllRoute from './Components/AllRoute'

function App() {
  return (
    <>
      <AllRoute />
    </>
  )
}
export default App


/*
Bước 1: Tạo các page có thể có: Home, Login, Register, Topic, Quiz, Answer, Result
Bước 2: Tạo Layout
Bước 3: Tạp Route, AllRoute, setup App, setup index.js, PrivateRoute
Bước 4: Phân tích page nào public hay private để để vào children tương ứng cho đúng
Bước 5: Tạp file utils và helpers
------------------------------------------
Bước 6: Code các trang


*/