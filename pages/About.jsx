import { useLocation } from "react-router-dom";

export default function About() {
    const searchParams = useLocation().search;
    console.log(searchParams);
    return <div>About 페이지입니다.</div>;
}