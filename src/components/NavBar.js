import React, {useState} from "react";
import {Link} from "react-router-dom";

function NavBar() {
	const [navCollapsed, setNavCollapsed] = useState(true);

	const toggleNav = () => {
		setNavCollapsed(!navCollapsed);
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
				<Link to="/" className="navbar-brand">
					todoList
				</Link>
				<button
					aria-expanded="false"
					className="navbar-toggle collapsed"
					onClick={toggleNav}
					type="button"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className={(navCollapsed ? "collapse" : "") + " navbar-collapse"}>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/about/" className="nav-link">
								About
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
