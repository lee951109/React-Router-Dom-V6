import { useParams } from "react-router-dom";

// match.params(v5) ==> useParams();(V6)

// V5
// export default function Profile(props) {
//   const id = props.match.params.id;
//   console.log(id);
//   return (
//    <div>
//      <h1>Profile 페이지입니다.</h1>
//      {id && <p> id는 {id} 입니다. </p>}
//    </div>
//    );
// }

// V6
export default function Profile(props) {
  console.log(props);
  const { id } = useParams();
  console.log(id, typeof  id);
  return (
    <div>
      <h1>Profile 페이지입니다.</h1>
      {id && <p> id는 {id} 입니다. </p>}
    </div>
  );
}