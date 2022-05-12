import { useLocation } from "react-router-dom";
import queryString from 'query-string';

// location.search(V5) ==> useLocation().search(V6)

// V5
// export default function About(props) {
// 	const searchParams = props.location.search;
// 	console.log(searchParams);
// 	const obj = new URLSearchParams(searchParams);
// 	console.log(obj.get('name'));
//
// 	return (
// 		<div>
// 			<h2>About 페이지입니다.</h2>
// 			{query.name && <p>name 은 {query.name} 입니다. </p>}
// 		</div>
// 	);
// }

// V6
export default function About() {
	const searchParams = useLocation().search;
	console.log(searchParams);
// const obj = new URLSearchParams(searchParams);
// console.log(obj.get('name'));
// query-string을 사용해서 key값을 바로 가져올 수 있다.
	const query = queryString.parse(searchParams);
	console.log(query); // {name : value}
	
	return (
		<div>
			<h2>About 페이지입니다.</h2>
			{query.name && <p>name 은 {query.name} 입니다. </p>}
		</div>
	);

}