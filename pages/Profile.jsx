import { useParams } from "react-router-dom";


export default function Profile(props) {
  console.log(props);
  const { id } = useParams();
  console.log(id, typeof  id);
  return (
    <div>
      <h1>Profile 페이지입니다.</h1>
      {id && <p> id는 1 입니다. </p>}
    </div>
  );
}