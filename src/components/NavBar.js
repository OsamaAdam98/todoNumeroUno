import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
				<Link to="/" className="navbar-brand">
					todoList
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link to="/" className="nav-link">
								Home <span class="sr-only" />
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
