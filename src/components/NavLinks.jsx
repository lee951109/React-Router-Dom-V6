import { NavLink } from "react-router-dom";


// V5
// const activeStyle = { color : "green" };
// export default function NavLinks() {
// 	return(
// 		<ul>
// 			<li>
// 				<NavLink to="/" activeStyle={activeStyle}>Home</NavLink>
// 			</li>
// 			<li>
// 				<NavLink to="/profile" exact activeStyle={activeStyle}>Profile</NavLink>
// 			</li>
// 			<li>
// 			  <NavLink to="/profile/1" activeStyle={activeStyle}>Profile/1</NavLink>
// 			</li>
// 			<li>
// 				<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
// 			</li>
// 		</ul>
// 	);
// }


// V6
export default function NavLinks() {
	return(
		<ul>
			<li>
				<NavLink to="/" style={({isActive}) => ({color : isActive ? "green" : "blue"})}>
          Home
        </NavLink>
			</li>
			<li>
				<NavLink to="/profile" end style={({isActive}) => ({color : isActive ? "green" : "blue"})}>
          Profile
        </NavLink>
			</li>
			<li>
			  <NavLink to="/profile/1" style={({isActive}) => ({color : isActive ? "green" : "blue"})}>
          Profile/1
        </NavLink>
			</li>
			<li>
				<NavLink to="/about" end style={({isActive}) => (
          {color : isActive ? "green" : "blue"}
          )}
          >
          About
        </NavLink>
			</li>
		</ul>
	);
}