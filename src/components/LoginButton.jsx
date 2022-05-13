import { useNavigate } from "react-router-dom";



export default function LoginButton(props) {
  console.log(props);
  let navigate = useNavigate();
  
  function login() {
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return <button onClick={login}>로그인 하러 가기</button>
}