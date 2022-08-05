import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="nav-center">
				<div className="logo-box">
					<Logo className="logo" />
				</div>

				<div className="links-container">
					<ul className="nav-links">
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Resources</a>
						</li>
					</ul>
					<div className="nav-btns">
						<button className="login-btn">Login</button>
						<button className="signup-btn">Sign up</button>
					</div>
				</div>

				<button className="bars">
					<FaBars />
				</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	/* border: 1px solid black; */
	/* border-bottom: 1px solid black; */
	padding: 1rem 0.1rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.nav-center {
		/* border: 1px solid black; */
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 90%;

		.logo {
			/* border: 1px solid black; */
			height: fit-content;
		}
		div {
			/* border: 1px solid black; */
			height: fit-content;
		}

		.links-container {
			visibility: hidden;
			position: absolute;
		}

		.bars {
			height: fit-content;
			background: transparent;
			border: transparent;
			font-size: 1.5rem;
			color: var(--clr-neutral-1);
			cursor: pointer;
		}
		.bars:hover {
			color: var(--clr-neutral-3);
		}
	}

	@media screen and (min-width: 680px) {
		/* border: 1px solid black;
	padding: 1.5rem 0.7rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.nav-center {
		position: relative;
		border: 1px solid black;
		display: flex;
		align-items: center;
		width: 80%;

		.logo {
			height: fit-content;
		}
		div {
			border: 1px solid black;
			height: fit-content;
		}

		.links-container {
			visibility: vis;
			margin-left: 40px;
			width: 30%;
			.nav-links {
				border: 1px solid black;
				display: flex;
				justify-content: space-between;

				a {
					color: var(--clr-neutral-1);
					font-weight: var(--fweight-bold);
					font-size: 14px;
				}
				a:hover {
					color: var(--clr-neutral-3);
				}
			}
		}

		.nav-btns {
			display: flex;
			justify-content: space-between;
			position: absolute;
			right: 20px;

			.login-btn {
				background: transparent;
				border: transparent;
				color: var(--clr-neutral-1);
				font-weight: var(--fweight-bold);
				cursor: pointer;
				font-size: 1.2rem;
				margin-right: 20px;
			}
			.login-btn:hover {
				color: var(--clr-neutral-3);
			}

			.signup-btn {
				text-transform: capitalize;
				background-color: var(--clr-primary-1);
				padding: 0.4rem 1rem;
				border-radius: 2rem;
				border: transparent;
				font-size: 1.3rem;
				color: white;
				font-weight: var(--fweight-bold);
				cursor: pointer;
			}
		}

		
	} */
	}
`;
export default Navbar;
